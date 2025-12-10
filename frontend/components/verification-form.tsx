"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle2, Loader2, ExternalLink } from "lucide-react";

export function VerificationFormWithLabel() {
  const [attestation, setAttestation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    verified: boolean;
    proofOfCloud: boolean;
    checksum?: string;
    uploadedAt?: string;
    error?: string;
  } | null>(null);
  const [attestationType, setAttestationType] = useState<'intel' | 'amd'>('intel');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!attestation.trim()) {
      setResult({
        verified: false,
        proofOfCloud: false,
        error: "Please provide a valid TEE attestation quote.",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Normalize to hex (remove 0x prefix if present, remove whitespace)
      let quoteHex = attestation.trim().replace(/^0x/i, '').replace(/\s+/g, '');

      // Check if it's potentially base64 and convert
      if (!/^[0-9a-fA-F]+$/.test(quoteHex)) {
        try {
          // Attempt base64 to hex conversion
          const binary = atob(quoteHex);
          quoteHex = Array.from(binary, (char) =>
            char.charCodeAt(0).toString(16).padStart(2, '0')
          ).join('');
        } catch {
          throw new Error("Invalid attestation format. Please provide hex or base64 encoded quote.");
        }
      }

      // Step 1: Submit attestation to get checksum
      const verifyResponse = await fetch("https://cloud-api.phala.com/proofofcloud/attestations/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hex: quoteHex, type: attestationType }),
      });

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        throw new Error(verifyData.error || verifyData.message || "Verification failed");
      }

      const checksum = verifyData.checksum;
      if (!checksum) {
        throw new Error("No checksum returned from verification service");
      }

      // Step 2: Fetch full verification result using checksum
      const viewResponse = await fetch(`https://cloud-api.phala.com/proofofcloud/attestations/view/${checksum}`);

      if (!viewResponse.ok) {
        throw new Error("Failed to retrieve verification details");
      }

      const viewData = await viewResponse.json();

      setResult({
        verified: viewData.verified || false,
        proofOfCloud: viewData.proof_of_cloud || false,
        checksum: checksum,
        uploadedAt: viewData.uploaded_at,
      });
    } catch (error) {
      console.error("Verification error:", error);
      setResult({
        verified: false,
        proofOfCloud: false,
        error: error instanceof Error ? error.message : "Unable to connect to verification service. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to format timestamp
  const formatTimestamp = (timestamp?: string) => {
    if (!timestamp) return "";
    try {
      return new Date(timestamp).toLocaleString();
    } catch {
      return timestamp;
    }
  };

  // Determine result state
  const getResultState = () => {
    if (!result) return null;
    if (result.error) return "error";
    if (result.verified && result.proofOfCloud) return "success";
    if (result.verified && !result.proofOfCloud) return "warning";
    return "failed";
  };

  const resultState = getResultState();

  return (
    <div className="space-y-6">
      {/* Label */}
      <label htmlFor="attestation" className="block font-semibold text-gray-900">
        Attestation Quote
      </label>

      {/* Result Card - Displayed above the form */}
      {result && (
        <Card className={`${
          resultState === "success"
            ? "border-green-500 bg-green-50 dark:bg-green-950"
            : resultState === "warning"
            ? "border-amber-500 bg-amber-50 dark:bg-amber-950"
            : "border-red-500 bg-red-50 dark:bg-red-950"
        }`}>
          <CardContent className="pt-0">
            <div className="flex items-start gap-3">
              {resultState === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
              ) : (
                <AlertCircle className={`h-5 w-5 mt-0.5 shrink-0 ${
                  resultState === "warning"
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-red-600 dark:text-red-400"
                }`} />
              )}

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant={
                    resultState === "success" ? "default" :
                    resultState === "warning" ? "secondary" :
                    "destructive"
                  } className={
                    resultState === "success" ? "bg-green-600" :
                    resultState === "warning" ? "bg-amber-600 text-white" :
                    ""
                  }>
                    {resultState === "success" ? "Verified" :
                     resultState === "warning" ? "Valid Quote" :
                     "Failed"}
                  </Badge>
                </div>

                <div>
                  <h4 className={`font-semibold mb-1 ${
                    resultState === "success"
                      ? "text-green-900 dark:text-green-100"
                      : resultState === "warning"
                      ? "text-amber-900 dark:text-amber-100"
                      : "text-red-900 dark:text-red-100"
                  }`}>
                    {result.error
                      ? "Verification Failed"
                      : resultState === "success"
                      ? "Attestation Verified"
                      : resultState === "warning"
                      ? "Valid Attestation, Hardware Not Registered"
                      : "Verification Failed"}
                  </h4>
                  <p className={`text-sm ${
                    resultState === "success"
                      ? "text-green-800 dark:text-green-200"
                      : resultState === "warning"
                      ? "text-amber-800 dark:text-amber-200"
                      : "text-red-800 dark:text-red-200"
                  }`}>
                    {result.error
                      ? result.error
                      : resultState === "success"
                      ? "This hardware is confirmed in the Proof of Cloud registry with valid attestation."
                      : resultState === "warning"
                      ? "The attestation is cryptographically valid, but this hardware is not in the Proof of Cloud registry."
                      : "The attestation could not be verified. Please check your quote format."}
                  </p>
                </div>

                {!result.error && (
                  <>
                    <Separator className={
                      resultState === "success"
                        ? "bg-green-200 dark:bg-green-800"
                        : resultState === "warning"
                        ? "bg-amber-200 dark:bg-amber-800"
                        : "bg-red-200 dark:bg-red-800"
                    } />

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        {result.verified ? "✅" : "❌"}
                        <span className={
                          resultState === "success"
                            ? "text-green-900 dark:text-green-100"
                            : resultState === "warning"
                            ? "text-amber-900 dark:text-amber-100"
                            : "text-red-900 dark:text-red-100"
                        }>
                          Attestation cryptographically valid
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {result.proofOfCloud ? "✅" : "❌"}
                        <span className={
                          resultState === "success"
                            ? "text-green-900 dark:text-green-100"
                            : resultState === "warning"
                            ? "text-amber-900 dark:text-amber-100"
                            : "text-red-900 dark:text-red-100"
                        }>
                          Hardware in Proof of Cloud registry
                        </span>
                      </div>

                      {result.uploadedAt && (
                        <div className={`text-xs ${
                          resultState === "success"
                            ? "text-green-700 dark:text-green-300"
                            : resultState === "warning"
                            ? "text-amber-700 dark:text-amber-300"
                            : "text-red-700 dark:text-red-300"
                        }`}>
                          Verified at: {formatTimestamp(result.uploadedAt)}
                        </div>
                      )}

                      {result.checksum && (
                        <div className="mt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className={
                              resultState === "success"
                                ? "border-green-600 text-green-900 hover:bg-green-100 dark:border-green-400 dark:text-green-100 dark:hover:bg-green-900"
                                : resultState === "warning"
                                ? "border-amber-600 text-amber-900 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-100 dark:hover:bg-amber-900"
                                : "border-red-600 text-red-900 hover:bg-red-100 dark:border-red-400 dark:text-red-100 dark:hover:bg-red-900"
                            }
                          >
                            <a
                              href={`https://proof.t16z.com/reports/${result.checksum}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Detail Report
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-900">Platform</span>
          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              name="attestationType"
              value="intel"
              checked={attestationType === 'intel'}
              onChange={() => setAttestationType('intel')}
              className="h-4 w-4"
            />
            Intel
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              name="attestationType"
              value="amd"
              checked={attestationType === 'amd'}
              onChange={() => setAttestationType('amd')}
              className="h-4 w-4"
            />
            AMD
          </label>
        </div>
        <Textarea
          id="attestation"
          value={attestation}
          onChange={(e) => setAttestation(e.target.value)}
          placeholder="Paste your TEE attestation here (Base64 or hex encoded)"
          className="font-mono text-sm resize-vertical border-2 border-gray-300 focus:border-blue-600 whitespace-pre-wrap h-[100px]"
          required
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Verifying..." : "Verify Attestation"}
        </Button>
      </form>
    </div>
  );
}

// Re-export the original for backward compatibility
export { VerificationFormWithLabel as VerificationForm };