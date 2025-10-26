# Proof of Cloud: Verify Hardware Physical Security

## The Gap

Your TEE attestation is valid. The cryptography checks out. But **where is this hardware, physically?**

Was it on a workbench for a week? Is there a hardware interposer? Is it in a secure datacenter or someone's garage?

**The TEE can't tell you. And today, there's no simple way to verify it.**

## Why This Matters: Defense in Depth

You know TEE risks: 0-days, side-channels, implementation bugs. You've accepted that residual risk because TEEs are still the best option.

But what if you could add a **second independent layer**?

**With just TEE:** Attacker needs to break cryptography or find a covert channel.

**With TEE + Proof of Cloud:** Attacker needs to break the TEE *AND* breach a verified secure facility.

Even if tomorrow someone publishes a novel side-channel - they still need physical access to hardware in a locked datacenter. That's a much higher bar.

This is defense in depth. Two independent failures required instead of one.

## The Solution: A Verifiable Hardware Registry

**What:** Public, signed registry of cloud hardware verified to be in physically secure locations.

**How it works:**

*Registry Structure:*
- Hardware IDs (Intel DCAP PPID, AMD SEV Chip ID) extracted from attestation quotes
- Cryptographically signed entries: hardware ID → facility, verification level, timestamp
- Append-only log, publicly auditable

*Verification Methods:*
- **Level 1:** Trusted witness boots fresh hardware in datacenter, extracts ID via attestation, video proof. Cross-verified by multiple alliance members.
- **Level 2:** Automated proofs (zk-TLS of cloud console, vTPM claims, tamper-evident RFID with cryptographic binding)
- **Level 3:** Level 2 + continuous monitoring (periodic re-attestation, RFID heartbeats)

*Trust Model:*
- Vendor-neutral alliance (no single authority)
- Members verify each other's hardware (distributed trust)
- All verification evidence logged and auditable
- You choose acceptable verification level for your threat model

*Integration:*
```bash
# Extract hardware ID from attestation, query registry
curl https://api.proofofcloud.org/verify/{hardware_id}

# Response: verification status, level, facility, timestamp + signature
# Verify signature, check level meets your requirements
```

## Join Us

**Registry is live.** Founding members: Secret Network, Phala Network.

**For users:** Query the registry. Add a second security layer today.

**For infrastructure providers:** Join the alliance. Prove your physical security isn't just marketing.

[https://proofofcloud.org](https://proofofcloud.org)
