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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const { hex, type } = body || {};

    // Opt-in, so the default response shape is unchanged for existing callers.
    // Accepted as a body field or a query parameter.
    const compact =
      body?.compact === true ||
      req.nextUrl.searchParams.get("compact") === "1" ||
      req.nextUrl.searchParams.get("compact") === "true";

    if (typeof hex !== "string" || hex.trim().length === 0) {
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
        body: JSON.stringify({ hex, type: type || "intel" }),
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
