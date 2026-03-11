import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ checksum: string }> }
) {
  try {
    const { checksum } = await params;

    if (!checksum) {
      return NextResponse.json(
        { error: "Checksum is required" },
        { status: 400 }
      );
    }

    const viewRes = await fetch(
      `https://cloud-api.phala.com/proofofcloud/attestations/view/${checksum}`
    );

    const viewData = await viewRes.json().catch(() => ({}));

    if (!viewRes.ok) {
      return NextResponse.json(
        { error: viewData.error || viewData.detail || "Failed to retrieve verification details" },
        { status: viewRes.status }
      );
    }

    return NextResponse.json(viewData, { status: 200 });
  } catch (err) {
    console.error("View attestation API error:", err);
    return NextResponse.json(
      { error: "Failed to reach verification service" },
      { status: 502 }
    );
  }
}
