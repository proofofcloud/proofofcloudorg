"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export function VerificationFormWithLabel() {
  const [attestation, setAttestation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    title: string;
    message: string;
    details?: {
      attestationValid: boolean;
      machineInAllowlist: boolean;
      ppid?: string;
      tcbStatus?: string;
    };
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!attestation.trim()) {
      setResult({
        success: false,
        title: "Verification Failed",
        message: "Please provide a valid TEE attestation (Intel TDX or AMD SEV-SNP).",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:3000/api/verify-attestation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ attestation: attestation.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Verification failed");
      }

      if (data.success) {
        const { verification, details } = data;

        if (verification.attestationValid && verification.machineInAllowlist) {
          setResult({
            success: true,
            title: "Attestation Verified",
            message: "This hardware is registered in the Proof of Cloud registry and meets verification requirements.",
            details: {
              attestationValid: verification.attestationValid,
              machineInAllowlist: verification.machineInAllowlist,
              ppid: details.ppid,
              tcbStatus: details.tcbStatus,
            },
          });
        } else if (verification.attestationValid && !verification.machineInAllowlist) {
          setResult({
            success: false,
            title: "Hardware Not Registered",
            message: "The attestation is valid, but this hardware is not in the Proof of Cloud allowlist.",
            details: {
              attestationValid: verification.attestationValid,
              machineInAllowlist: verification.machineInAllowlist,
              ppid: details.ppid,
              tcbStatus: details.tcbStatus,
            },
          });
        } else {
          setResult({
            success: false,
            title: "Invalid Attestation",
            message: "The provided attestation could not be verified.",
            details: {
              attestationValid: verification.attestationValid,
              machineInAllowlist: verification.machineInAllowlist,
              ppid: details.ppid,
              tcbStatus: details.tcbStatus,
            },
          });
        }
      } else {
        throw new Error("Verification service returned an error");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setResult({
        success: false,
        title: "Verification Failed",
        message: error instanceof Error ? error.message : "An error occurred during verification. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group mb-6">
          <label htmlFor="attestation" className="block mb-2 font-semibold text-gray-900">
            Attestation Quote
          </label>
          <Textarea
            id="attestation"
            value={attestation}
            onChange={(e) => setAttestation(e.target.value)}
            placeholder={"Paste your TEE attestation here (Base64 or hex encoded)"}
            className="font-mono text-sm resize-vertical border-2 border-gray-300 focus:border-blue-600 whitespace-pre-wrap h-[100px]"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Verifying..." : "Verify Attestation"}
        </Button>
      </form>

      {result && (
        <Card className={`mt-6 ${result.success ? "border-green-500 bg-green-50 dark:bg-green-950" : "border-red-500 bg-red-50 dark:bg-red-950"}`}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              {result.success ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
              )}
              <div className="flex-1 space-y-2">
                <h4 className={`font-semibold ${result.success ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"}`}>
                  {result.title}
                </h4>
                <p className={`text-sm ${result.success ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>
                  {result.message}
                </p>

                {result.details && (
                  <div className={`mt-4 rounded-md p-3 text-sm font-mono space-y-1 ${result.success ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"}`}>
                    <div><strong>Verification Results:</strong></div>
                    <div>{result.details.attestationValid ? "✅" : "❌"} Attestation is {result.details.attestationValid ? "valid" : "not valid"}</div>
                    <div>{result.details.machineInAllowlist ? "✅" : "❌"} MachineID {result.details.machineInAllowlist ? "is present in" : "not found in"} the ProofOfCloud.org allowlist</div>
                    {result.details.ppid && (
                      <>
                        <div className="mt-3"><strong>Hardware Details:</strong></div>
                        <div>PPID: {result.details.ppid}</div>
                        <div>TCB Status: {result.details.tcbStatus}</div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Re-export the original for backward compatibility
export { VerificationFormWithLabel as VerificationForm };