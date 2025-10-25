# dcap_collateral_tool

A minimal CLI helper to verify **Intel DCAP quotes** (SGX/TDX), fetch the required **collateral**, and print a **single-line JSON** result suitable for backend consumption.

* **Input:** Hex-encoded DCAP quote
* **Output:** JSON on stdout containing verification status, selected quote fields (for TDX), and serialized collateral (hex)

> **Note:** AMD SEV-SNP is **not** handled by this tool. For SEV-SNP you need a different verifier.

---

## What it does

1. Accepts a **hex-encoded** DCAP quote.
2. Uses **libsgx_dcap_quoteverify** to:

   * Fetch the appropriate **collateral** (`tee_qv_get_collateral`)
   * Verify the quote (`sgx_qv_verify_quote`)
3. If the quote is **TDX (v4)**, extracts and prints useful fields (e.g., `mr_td`, `rtmrX`, `report_data`).
4. Prints a single JSON object to **stdout**; nothing else.

---

## Supported environment

* **OS:** Linux (Ubuntu/Debian recommended)
* **Arch:** x86_64
* **Libraries:** Intel DCAP runtime & dev packages

This tool links against Intel’s DCAP verification libraries and is intended to run on typical Linux servers. It is not designed for macOS/Windows.

---

## Directory layout

```
dcap_collateral_tool/
├─ README.md
├─ dcap_collateral_tool.cpp     # source (this file)
└─ bin/
   └─ dcap_collateral_tool      # compiled binary (created after build)
```

> Keep `bin/` in your repo so deploys can reference a stable path. If you build elsewhere, you can override the path via an environment variable (see “Integration” below).

---

## Prerequisites (Ubuntu / Debian)

Install Intel DCAP verifier libraries and a compiler:

```bash
sudo apt update
sudo apt install -y g++ \
  libsgx-dcap-ql \
  libsgx-dcap-quote-verify-dev \
  libsgx-dcap-ql-dev
```

> Package names above work on Ubuntu 22.04/24.04. If your distro uses different names, install the equivalent **DCAP QL** and **quote verify** dev/runtime packages.

---

## Build

From the `dcap_collateral_tool/` folder:

```bash
g++ dcap_collateral_tool.cpp \
  -O2 \
  -L/usr/lib/x86_64-linux-gnu \
  -lsgx_dcap_quoteverify \
  -o bin/dcap_collateral_tool
```

That’s it. The binary appears at `dcap_collateral_tool/bin/dcap_collateral_tool`.

---

## Usage (CLI)

**Input must be hex.** (If your quote is Base64, convert it to hex first; the website’s server layer already does this for you.)

```bash
./bin/dcap_collateral_tool <hex_quote>
```

* **stdout:** a single **JSON** line
* **stderr:** only errors (if any)
* **exit code:** `0` on success (JSON produced); non-zero on error before JSON is printed

---

## JSON output shape

On success, the tool prints a JSON object similar to:

```json
{
  "collateral": "<hex blob of serialized collateral>",
  "status": {
    "result": 0,
    "exp_status": 0
  },
  "quote": {
    "version": 4,
    "tee_type": "00000081",
    "tcb_svn": "…hex…",
    "mr_seam": "…hex…",
    "mr_signer_seam": "…hex…",
    "td_attributes": "…hex…",
    "xfam": "…hex…",
    "mr_td": "…hex…",
    "mr_config_id": "…hex…",
    "mr_owner": "…hex…",
    "mr_config": "…hex…",
    "rtmr0": "…hex…",
    "rtmr1": "…hex…",
    "rtmr2": "…hex…",
    "rtmr3": "…hex…",
    "report_data": "…hex…"
  }
}
```

**Fields:**

* `collateral` – Hex string of a packed structure derived from `sgx_ql_qve_collateral_t` (issuer chains, CRLs, TCB info, QE identity), serialized by the tool.
* `status.result` – `sgx_ql_qv_result_t` (integer). `0` means **OK**.
* `status.exp_status` – Expiration/TCB status code (bitmask). `0` typically means **Up to Date**.
* `quote` – Present when the input is a **TDX v4** quote (Intel TEE type `0x81`). Contains selected fields (all **hex**).

On failure to fetch collateral or verify, you may get:

```json
{
  "collateral": { "error": <int error code> }
}
```

or

```json
{
  "status": { "error": <int error code> }
}
```

depending on where the error occurred.

---

## Return codes

* `0` – JSON printed successfully (even if `status.result` reports a non-OK verification).
* `1` – Input missing/empty.
* Other non-zero – Tool/verification/collateral errors before JSON could be emitted.

> In other words, check the **presence and contents of JSON** first; then inspect `status.result`/`status.exp_status` to decide the verification outcome.

---

## Integration with the website backend

The Node server (in this project) expects the binary at:

```
dcap_collateral_tool/bin/dcap_collateral_tool
```

You can override the path with an environment variable:

```bash
export DCAP_TOOL_PATH=/absolute/path/to/dcap_collateral_tool
```

The **server endpoint** accepts **hex or Base64** quotes from the browser, converts Base64 → hex when needed, **then** calls this tool. The **tool itself only accepts hex**.