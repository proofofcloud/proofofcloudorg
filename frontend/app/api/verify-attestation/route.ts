import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const { hex, type } = body || {};

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

    return NextResponse.json(verifyData, { status: 200 });
  } catch (err) {
    console.error("Attestation verification API error:", err);
    return NextResponse.json(
      { error: "Failed to reach verification service" },
      { status: 502 }
    );
  }
}
