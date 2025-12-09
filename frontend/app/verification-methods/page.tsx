"use client";

import Link from "next/link";
import { useState } from "react";

export default function VerificationMethods() {
  const [showRfidDetails, setShowRfidDetails] = useState(false);
  const [showColocationPledge, setShowColocationPledge] = useState(false);

  return (
    <main className="flex flex-col">
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white text-center">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1000px' }}>
          <h1 className="text-5xl font-extrabold mb-4">Verification Methods</h1>
          <p className="text-lg opacity-90">
            Detailed methodologies for verifying cloud hardware at different security levels.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-8 mx-auto" style={{ maxWidth: '960px' }}>
          <article className="space-y-16">
            {/* Level 1 */}
            <section>
              <h2 className="text-4xl font-bold mb-8">Level 1: Human-Assisted Verification</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Level 1 verification relies on human witnesses to validate that hardware is located at legitimate facilities. Multiple independent alliance members cross-verify evidence to prevent collusion.
              </p>

              <div className="space-y-10">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Bare Metal Cloud Verification</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Bare metal cloud providers (e.g., OVH, Hetzner) offer serial console access to servers. We can verify servers are managed by reputable providers through a witness ceremony.
                  </p>

                  <p className="text-lg font-semibold mb-3 mt-6">Protocol:</p>
                  <ol className="space-y-2 text-lg text-gray-600 leading-relaxed list-decimal pl-6">
                    <li>Alice (prover) and Bob (verifier) join a video conference</li>
                    <li>Alice shares screen showing the serial console from cloud provider</li>
                    <li>Bob sends a challenge (32-byte nonce) to Alice</li>
                    <li>Alice runs a prebuilt Docker container to produce an attestation (e.g., DCAP quote) with the nonce in the reportData field</li>
                    <li>Alice downloads the quote and sends it to Bob</li>
                    <li>Bob verifies the attestation, checks the nonce matches, and extracts the hardware ID (PPID)</li>
                  </ol>

                  <div className="bg-white border border-gray-300 rounded-lg p-5 mt-6">
                    <p className="text-sm font-semibold mb-2">Trust Model</p>
                    <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                      <li><strong>Assumption:</strong> Bare metal cloud provider is trusted</li>
                      <li><strong>Protects against:</strong> Server owner attacks, outsider attacks</li>
                      <li><strong>Does not protect:</strong> Malicious datacenter insiders</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Colocation Server Verification</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Colocation servers lack built-in cloud console access. We combine multiple evidence sources to achieve the desired security properties.
                  </p>

                  <p className="text-lg font-semibold mb-3 mt-6">Evidence Methods:</p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold mb-1">1. Claim by Server Owner</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Server owner (e.g., Phala Cloud) provides signed claim that hardware is hosted in a secure facility. Optional: compliance certifications (SOC2, ISO 27001).
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold mb-1">2. Proof of Datacenter Hosting</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Video witness of datacenter environment combined with email confirmation from datacenter operator.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold mb-1">3. Datacenter Pledge of Notification</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Datacenter pledges to alert Proof of Cloud when server is removed or suspicious devices are introduced.
                        Pledge form available <a href="/ProofOfCloud_Colocation_Pledge.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">here</a>.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold mb-1">4. PSU Heartbeat Monitoring</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Periodic heartbeat checks to IPMI/BMC prove server hasn't left the rack (physical attacks would disrupt network/power).
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold mb-1">5. IP Address Ownership Proof</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Verify inbound/outbound IP addresses are within datacenter's range via video witness of <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">curl ipconfig.me</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">mtr</code>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Colocation Provider Pledge</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    A formal commitment by colocation providers to maintain physical security and report security-relevant events to the Proof of Cloud Alliance.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-4">
                    <p className="text-sm font-semibold mb-2 text-blue-800">Download Official Pledge Document</p>
                    <a
                      href="/ProofOfCloud_Colocation_Pledge.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      ProofOfCloud_Colocation_Pledge.pdf
                    </a>
                  </div>

                  <button
                    onClick={() => setShowColocationPledge(!showColocationPledge)}
                    className="mt-2 text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-2"
                  >
                    {showColocationPledge ? '− Hide details' : '+ Show more details'}
                  </button>

                  {showColocationPledge && (
                    <div className="mt-6 space-y-4 border-t border-gray-300 pt-6">
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Purpose of the Colocation Pledge</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          While Intel TDX and AMD SEV-SNP provide strong runtime security, they don't fully protect against sophisticated physical attacks like wiretap.fail or Battering Ram. If hardware is removed from a secure datacenter, attackers could potentially extract keys or generate fraudulent attestations. The Colocation Provider Pledge addresses this gap by establishing formal accountability: colocation providers commit to maintaining physical security and reporting any security-relevant events to the Proof of Cloud Alliance.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Key Provider Responsibilities</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Participating colocation providers pledge to: (1) register and confidentially maintain Machine IDs (Intel TDX PPID or AMD SEV-SNP Chip ID) for Alliance member hardware, (2) immediately notify info@proofofcloud.org within 24 hours if hardware is removed, unusual physical access occurs (chassis opening, component replacement beyond routine maintenance), or a security incident affects the hardware, (3) refrain from performing or permitting physical attacks, tampering, key extraction, or installation of monitoring devices on Alliance hardware, and (4) store Machine IDs securely with need-to-know access only.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Enforcement and Benefits</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          The Pledge supplements existing customer agreements and creates additional accountability. Breaches may result in removal from the Alliance's recognized provider list, immediate Machine ID revocation, and notification to all members. This framework transforms colocation verification from purely technical evidence to a legally-backed commitment, significantly raising the bar for attackers while providing Alliance members with rapid incident notification. Either party can terminate the Pledge with 30 days' written notice.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Level 2 */}
            <section>
              <h2 className="text-4xl font-bold mb-8 pt-8">Level 2: Automated Verification</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Level 2 eliminates human trust requirements through cryptographic proofs. Verification is fully automated and relies only on mathematical guarantees.
              </p>

              <div className="space-y-10">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">zk-TLS Verification</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Extract hardware IDs from attestations performed through cloud control planes (e.g., OVH serial console) with zero-knowledge TLS proofs.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong>How it works:</strong> The verifier obtains a zk-TLS proof that demonstrates an attestation was generated through the cloud provider's authenticated console session, without revealing session credentials. This provides cryptographic evidence that the hardware is managed by the stated provider.
                  </p>

                  <div className="bg-white border border-gray-300 rounded-lg p-5 mt-6">
                    <p className="text-sm font-semibold mb-2">Security Properties</p>
                    <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                      <li>No human witnesses required</li>
                      <li>Cryptographic proof of cloud provider control</li>
                      <li>Tamper-evident: any modification breaks the proof</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">vTPM Cryptographic Claims</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Hyperscalers can issue vTPM-based cryptographic claims binding virtual machine instances to physical hardware identities.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    <strong>Reference:</strong> Based on methodology described in <a href="https://arxiv.org/html/2510.12469v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">"Proof of Cloud: Data Center Execution Assurance for Confidential VMs"</a> <em>(arXiv:2510.12469, 2025)</em>
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong>How it works:</strong> The cloud provider's infrastructure generates a signed statement from the physical TPM that certifies which hardware hosts a given VM. The vTPM chain of trust links the VM's TEE attestation back to a physical PPID or Chip ID.
                  </p>

                  <div className="bg-white border border-gray-300 rounded-lg p-5 mt-6">
                    <p className="text-sm font-semibold mb-2">Security Properties</p>
                    <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                      <li>Fully automated verification</li>
                      <li>Cryptographic binding from VM to physical hardware</li>
                      <li>Requires cloud provider TPM infrastructure support</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Tamper-Evident RFID Beacons</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Physical RFID tags generate cryptographic proofs that servers remain in verified locations without physical tampering.
                  </p>

                  <div className="bg-white border border-gray-300 rounded-lg p-5 mb-4">
                    <p className="text-sm font-semibold mb-2">Security Properties</p>
                    <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                      <li>Detects physical tampering (case opening or server removal)</li>
                      <li>Cryptographically signed heartbeats published to transparency log</li>
                      <li>No ongoing human intervention required</li>
                      <li>Resilient to all but the most sophisticated physical attacks</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowRfidDetails(!showRfidDetails)}
                    className="mt-2 text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-2"
                  >
                    {showRfidDetails ? '− Hide details' : '+ Show more details'}
                  </button>

                  {showRfidDetails && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <p className="text-lg font-semibold mb-3">Setup:</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Three components are deployed in a server rack:
                        </p>
                        <ul className="space-y-2 text-gray-600 text-sm list-disc pl-6 mb-6">
                          <li><strong>RFID Tag 1:</strong> Seals across server body and lid (detects case opening)</li>
                          <li><strong>RFID Tag 2:</strong> Attached to immovable rack infrastructure (detects server removal)</li>
                          <li><strong>RFID Reader:</strong> Connected to internet, queries tags and publishes heartbeats</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-lg font-semibold mb-3">Continuous Monitoring:</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          A remote verifier periodically pings RFID tags (e.g., every 10 seconds) and publishes heartbeats to a transparency log. The short interval prevents sophisticated physical attacks on the RFID system.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          <strong>Tamper Evidence:</strong> RFID tags are designed to break instantly when tampered with. Recovery is extremely difficult and essentially impossible within short timeframes.
                        </p>
                      </div>

                      <div className="border-t border-gray-300 pt-6 space-y-4">
                        <div>
                          <p className="font-semibold text-gray-800 mb-2">How Tamper-Evident RFID Works</p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            A tamper-evident RFID acts as a physical "seal" - once any part of it is broken, the full RFID functionality breaks instantly. When queried by a reader, the tag responds with a cryptographically signed message (typically with a timestamp). The reader exposes this interface to third-party verifiers who can automatically and continuously request heartbeats. Because the tags are designed to break upon tampering, recovering them is extremely difficult and essentially impossible within the short monitoring intervals.
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800 mb-2">Initial Setup Ceremony</p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            The RFID tags are attached as described above, then a setup ceremony similar to Level 1 datacenter verification is performed: (1) read the tags and record their identities, (2) connect to the server via VGA console and produce a remote attestation to extract the hardware ID, (3) record the entire setup session or invite someone to witness it in a live video session. This creates a verifiable link between the RFID tags and the specific hardware being monitored.
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800 mb-2">Authorized Maintenance Protocol</p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            For authorized server maintenance, the server owner must record the full operation session and only remove the RFID tags during that session. After maintenance is complete, new RFID tags are attached and the initial setup process is redone. This protocol prevents the server owner from performing in-place attacks during maintenance windows while still allowing necessary hardware servicing.
                          </p>
                        </div>
                      </div>

                      <div className="bg-amber-50 border border-amber-300 rounded-lg p-5">
                        <p className="text-sm font-semibold mb-2 text-amber-700">Authorized Maintenance</p>
                        <p className="text-sm text-gray-600">
                          For authorized maintenance, server owner must record the full operation, remove RFID tags only during the session, then re-attach new tags and redo setup. This prevents in-place attacks during maintenance windows.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Level 3 */}
            <section>
              <h2 className="text-4xl font-bold mb-8 pt-8">Level 3: Continuous Monitoring</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Level 3 combines Level 2 automated verification with ongoing monitoring to detect integrity violations in near real-time.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Continuous Re-Verification</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Any Level 2 method can be elevated to Level 3 by implementing periodic automated re-verification:
                </p>
                <ul className="space-y-2 text-gray-600 list-disc pl-6">
                  <li>Periodic zk-TLS proof generation and verification</li>
                  <li>Regular vTPM claim refreshes from cloud infrastructure</li>
                  <li>Continuous RFID heartbeat monitoring (e.g., 10-second intervals)</li>
                </ul>

                <div className="bg-white border border-gray-300 rounded-lg p-5 mt-6">
                  <p className="text-sm font-semibold mb-2">Additional Security Properties</p>
                  <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                    <li>Sustained integrity monitoring over time</li>
                    <li>Near real-time detection of physical compromise</li>
                    <li>Public audit trail of continuous verification</li>
                    <li>Attacker requires sustained undetected compromise</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}