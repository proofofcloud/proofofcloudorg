import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Charter() {
  return (
    <main className="flex flex-col">
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6">Proof of Cloud Charter Draft v0.1</h1>

          <article className="space-y-12">
            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">Purpose</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proof of Cloud ("PoC") is a vendor-neutral alliance that maintains a <strong>signed, append-only registry</strong> of cloud-hosted <strong>server hardware identities</strong> (Intel DCAP PPID and AMD SEV-SNP CHIP ID), along with the evidence and endorsements establishing each entry's verification level. The registry's goal is to make it <strong>verifiable</strong> - not merely asserted - that a workload runs on genuine cloud hardware at a legitimate facility, while being explicit about residual risks and non-goals.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">1. Scope & Non-Goals</h2>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                <li><strong>Scope:</strong> Define hardware integrity verification levels and methodologies for adding hardware identities to a public, signed registry.</li>
                <li><strong>Non-Goals:</strong> The alliance <strong>does not claim protection against all physical attacks</strong> or certify the full operational security of any provider.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">2. Governance</h2>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                <li><strong>Members:</strong> Open to general members. <strong>One company = one member = one vote.</strong></li>
                <li><strong>Chair:</strong> Elected for <strong>6-month</strong> terms. Responsible for setting agendas, moderating votes, and acting as a tie-breaker (optional vice-chair).</li>
                <li><strong>Quorum & Voting:</strong> Simple majority quorum (e.g. with 8 members, 5 present). Decisions pass by simple majority unless security-critical.</li>
                <li><strong>Security-critical changes:</strong> Schema or protocol changes, as well as emergency revocations, require approval by at least 2/3 of all members.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">3. Working Groups</h2>
              <ol className="space-y-3 text-lg text-muted-foreground leading-relaxed list-decimal pl-6">
                <li><strong>Verification WG:</strong> Handles onboarding, evidence review, and revocation proposals.</li>
                <li><strong>Methodologies WG:</strong> Develops and maintains verification methods, threat models, and schemas.</li>
                <li><strong>Ops & Outreach WG:</strong> Manages the website, registry infrastructure, key and signature management, snapshots, DNS anchoring, documentation, and community engagement.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">4. Verification Levels</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We define 3 levels of verification, with higher levels indicating stronger security guarantees. These levels are intentionally defined <strong>abstractly</strong>, allowing flexibility for future evolution of detailed verification methodologies.
              </p>

              <div className="space-y-10">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-2xl font-semibold mb-4">Level 1: Human-Assisted Verification</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Verification relies on human agents who collect and validate sufficient evidence to confirm the hardware's integrity.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed"><strong>Examples:</strong></p>
                  <ul className="space-y-2 text-lg text-muted-foreground leading-relaxed list-disc pl-6 mt-2">
                    <li>Extract hardware id from a remote attestation performed via cloud control plane (e.g. OVH's serial console), verified by a human in a real-time video session</li>
                    <li>Verifying a colocated data-center server via live, human-attended video inspection</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-2xl font-semibold mb-4">Level 2: Automated Verification</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Verification is fully unattended, eliminating the need to trust any human participant in the process.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed"><strong>Examples:</strong></p>
                  <ul className="space-y-2 text-lg text-muted-foreground leading-relaxed list-disc pl-6 mt-2">
                    <li>Extracting the hardware id from an attestation performed through the cloud control plane (e.g., OVH's serial console), verifiable via zk-TLS</li>
                    <li>vTPM-based cryptographic claims issued by hyperscalers (as described in <em>arXiv preprint arXiv:2510.12469, 2025</em>)</li>
                    <li>Cryptographic proofs generated by tamper-evident RFID beacons</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-2xl font-semibold mb-4">Level 3: Continuous Monitoring</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Provides Level 2 security with ongoing monitoring to ensure sustained hardware integrity and detect any violations in near-real time.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed"><strong>Examples:</strong></p>
                  <ul className="space-y-2 text-lg text-muted-foreground leading-relaxed list-disc pl-6 mt-2">
                    <li>Periodic checks or re-attestations using any Level-2 verification method</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">5. Registry</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The registry is a transparency log that records the latest verified hardware IDs under each vendor. Anyone should be able to verify that a given piece of hardware is included in the registry.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Privacy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Although the registry is public, it does not need to disclose the full list of hardware IDs. This approach keeps the transparency log succinct while preserving vendor privacy. Privacy can be achieved by committing to a list rather than publishing it directly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For instance, each vendor may register the Merkle tree root representing its verified hardware set. A user who possesses a hardware ID and its Merkle proof can independently verify inclusion.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Transactions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The transparency log must record all changes to registered hardware identities. Each change is expressed as a transaction of the form:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>Update(vendor, newCommitment, signatures)</code>
              </pre>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Entries</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The evidence associated with a verified hardware unit is organized as a <strong>Proof-of-Cloud entry</strong>, which is stored as a key-value record:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong>Key:</strong> <code className="bg-muted px-2 py-1 rounded">platform_uid</code> - a string to uniquely identify the hardware
                  <ul className="space-y-2 list-disc pl-6 mt-2">
                    <li>Intel TDX: <code className="bg-muted px-2 py-1 rounded">intel:tdx:ppid:...</code></li>
                    <li>AMD SEV-SNP: <code className="bg-muted px-2 py-1 rounded">amd:snp:chipid:...</code></li>
                  </ul>
                </li>
                <li>
                  <strong>Values:</strong>
                  <ul className="space-y-2 list-disc pl-6 mt-2">
                    <li><code className="bg-muted px-2 py-1 rounded">method</code> - how the verification was performed</li>
                    <li><code className="bg-muted px-2 py-1 rounded">level</code> - verification level (1-3)</li>
                    <li><code className="bg-muted px-2 py-1 rounded">evidences[]</code> - an array of binary artifacts supporting the verification; contents depend on the verification method</li>
                    <li><code className="bg-muted px-2 py-1 rounded">timestamp</code> - when the verification was completed</li>
                    <li><code className="bg-muted px-2 py-1 rounded">endorsements[]</code> - signatures from Proof-of-Cloud members indicating their endorsement (either as witnesses or as independent verifiers of the evidence)</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Revocation list</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">TBD</p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 pt-8">6. Incidents & Amendments</h2>

              <h3 className="text-2xl font-semibold mb-4">Flagging SLA</h3>
              <ul className="space-y-2 text-lg text-muted-foreground leading-relaxed list-disc pl-6 mb-6">
                <li>Verification WG triages within <strong>72h</strong></li>
                <li>Emergency quorum may <strong>freeze</strong> an entry</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Amendments</h3>
              <ul className="space-y-2 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                <li>Editorial: simple majority</li>
                <li>Security-relevant: 2/3</li>
              </ul>
            </section>
          </article>

          <div className="mt-16 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
