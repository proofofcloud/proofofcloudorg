import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const report = body?.report;

    if (typeof report !== "string" || report.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid AMD attestation report provided" },
        { status: 400 }
      );
    }

    const upstreamRes = await fetch(
      "https://nilcc-verifier.nillion.network/v1/attestations/verify-amd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ report }),
      }
    );

    const contentType = upstreamRes.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const json = await upstreamRes.json().catch(() => ({}));
      // Treat any 2xx response from the verifier as success.
      return NextResponse.json(
        {
          success: upstreamRes.ok,
          ...json,
        },
        { status: upstreamRes.status }
      );
    } else {
      const text = await upstreamRes.text();
      if (!upstreamRes.ok) {
        return NextResponse.json(
          { success: false, error: text || "AMD attestation verification failed" },
          { status: upstreamRes.status }
        );
      }

      return new NextResponse(text, {
        status: upstreamRes.status,
        headers: { "Content-Type": "text/plain" },
      });
    }
  } catch (err) {
    console.error("AMD verifier Next.js API error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to reach AMD verifier" },
      { status: 502 }
    );
  }
}

