import { NextRequest, NextResponse } from "next/server";

/**
 * Reduce a full verification response to just the registry verdict.
 *
 * The upstream response embeds the parsed quote, the PCK certificate chain and
 * the DCAP collateral, which runs to ~26 KB. Callers that only need to know
 * "is this machine endorsed?" — on-chain consumers, monitoring, CI gates — pay
 * that cost on every request for four fields they can use.
 *
 * Keeps `verified` (lifted out of `quote`) so a compact caller still learns
 * whether the quote itself checked out, without receiving the quote.
 */
function toCompact(verifyData: Record<string, unknown>) {
  const quote = (verifyData.quote ?? {}) as Record<string, unknown>;

  return {
    verified: quote.verified ?? null,
    proof_of_cloud: verifyData.proof_of_cloud ?? null,
    checksum: verifyData.checksum ?? null,
    node_provider: verifyData.node_provider ?? null,
    verified_at: verifyData.verified_at ?? null,
  };
}

/**
 * Convert a base64-encoded quote to the hex the upstream API expects.
 *
 * Hex doubles the quote on the wire; base64 costs a third. A ~5 KB TDX quote is
 * ~10 KB as hex but ~6.7 KB as base64, which matters for callers whose transport
 * caps the request — on-chain HTTP oracles cap request size, and a hex-encoded
 * quote alone can exceed the budget before headers are counted.
 *
 * Strict on purpose: `Buffer.from` silently discards invalid characters, so a
 * typo'd payload would otherwise be forwarded as a valid-looking but wrong
 * quote. Requiring a canonical round-trip rejects that at the edge.
 */
function hexFromBase64(value: string): string | null {
  const encoded = value.trim();

  if (encoded.length === 0 || encoded.length % 4 !== 0) return null;
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(encoded)) return null;

  const decoded = Buffer.from(encoded, "base64");
  if (decoded.length === 0 || decoded.toString("base64") !== encoded) return null;

  return decoded.toString("hex");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const { hex, b64, type } = body || {};

    // Opt-in, so the default response shape is unchanged for existing callers.
    // Accepted as a body field or a query parameter.
    const compact =
      body?.compact === true ||
      req.nextUrl.searchParams.get("compact") === "1" ||
      req.nextUrl.searchParams.get("compact") === "true";

    // `hex` stays the primary field; `b64` is an alternative encoding of the
    // same quote. If both are present, `hex` wins and `b64` is ignored.
    let quoteHex: string | null = null;

    if (typeof hex === "string" && hex.trim().length > 0) {
      quoteHex = hex;
    } else if (typeof b64 === "string" && b64.trim().length > 0) {
      quoteHex = hexFromBase64(b64);
      if (quoteHex === null) {
        return NextResponse.json(
          { error: "Invalid base64 attestation quote provided" },
          { status: 400 }
        );
      }
    }

    if (quoteHex === null) {
      return NextResponse.json(
        { error: "Invalid attestation quote provided" },
        { status: 400 }
      );
    }

    const verifyRes = await fetch(
      "https://cloud-api.phala.com/proofofcloud/attestations/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hex: quoteHex, type: type || "intel" }),
      }
    );

    const verifyData = await verifyRes.json().catch(() => ({}));

    if (!verifyRes.ok) {
      return NextResponse.json(
        { error: verifyData.error || verifyData.detail || verifyData.message || "Verification failed" },
        { status: verifyRes.status }
      );
    }

    return NextResponse.json(compact ? toCompact(verifyData) : verifyData, {
      status: 200,
    });
  } catch (err) {
    console.error("Attestation verification API error:", err);
    return NextResponse.json(
      { error: "Failed to reach verification service" },
      { status: 502 }
    );
  }
}
