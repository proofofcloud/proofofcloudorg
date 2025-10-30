import Link from "next/link";

export default function Charter() {
  return (
    <main className="flex flex-col">
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white text-center">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1000px' }}>
          <h1 className="text-5xl font-extrabold mb-4">Alliance Charter Draft</h1>
          <p className="text-lg opacity-90">Draft Charter v0.1 for the Proof of Cloud Alliance</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-8 mx-auto" style={{ maxWidth: '960px' }}>
          <article className="bg-white rounded-xl border border-gray-200 p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Purpose</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Proof of Cloud ("PoC") is a vendor-neutral alliance that maintains a <strong>signed, append-only registry</strong> of cloud-hosted <strong>server hardware identities</strong> (Intel DCAP PPID and AMD SEV-SNP CHIP ID), along with the evidence and endorsements establishing each entry's verification level. The registry's goal is to make it <strong>verifiable</strong> - not merely asserted - that a workload runs on genuine cloud hardware at a legitimate facility, while being explicit about residual risks and non-goals.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-10">1. Scope & Non-Goals</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6 mb-8">
              <li><strong>Scope:</strong> Define hardware integrity verification levels and methodologies for adding hardware identities to a public, signed registry.</li>
              <li><strong>Non-Goals:</strong> The alliance <strong>does not claim protection against all physical attacks</strong> or certify the full operational security of any provider.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-10">2. Governance</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6 mb-8">
              <li><strong>Members:</strong> Open to general members. <strong>One company = one member = one vote.</strong></li>
              <li><strong>Chair:</strong> Elected for <strong>6-month</strong> terms. Responsible for setting agendas, moderating votes, and acting as a tie-breaker (optional vice-chair).</li>
              <li><strong>Quorum & Voting:</strong> Simple majority quorum (e.g. with 8 members, 5 present). Decisions pass by simple majority unless security-critical.</li>
              <li><strong>Security-critical changes:</strong> Schema or protocol changes, as well as emergency revocations, require approval by at least 2/3 of all members.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-10">3. Working Groups</h2>
            <ol className="space-y-3 text-gray-700 leading-relaxed list-decimal pl-6 mb-8">
              <li><strong>Verification WG:</strong> Handles onboarding, evidence review, and revocation proposals.</li>
              <li><strong>Methodologies WG:</strong> Develops and maintains verification methods, threat models, and schemas.</li>
              <li><strong>Ops & Outreach WG:</strong> Manages the website, registry infrastructure, key and signature management, snapshots, DNS anchoring, documentation, and community engagement.</li>
            </ol>

            <h2 className="text-3xl font-bold mb-6 mt-10">4. Verification Levels</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We define 3 levels of verification, with higher levels indicating stronger security guarantees. These levels are intentionally defined <strong>abstractly</strong>, allowing flexibility for future evolution of detailed verification methodologies.
            </p>

            <div className="space-y-10">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold mb-4">Level 1: Human-Assisted Verification</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Verification relies on human agents who collect and validate sufficient evidence to confirm the hardware's integrity.
                </p>
                <p className="text-gray-700 leading-relaxed"><strong>Examples:</strong></p>
                <ul className="space-y-2 text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Extract hardware id from a remote attestation performed via cloud control plane (e.g. OVH's serial console), verified by a human in a real-time video session</li>
                  <li>Verifying a colocated data-center server via live, human-attended video inspection</li>
                  <li>In case the hardware is in Colocation, members perform a verification of signed <a href="/ProofOfCloud_Colocation_Pledge.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Colocation Provider Pledge</a>. </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold mb-4">Level 2: Automated Verification</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Verification is fully unattended, eliminating the need to trust any human participant in the process.
                </p>
                <p className="text-gray-700 leading-relaxed"><strong>Examples:</strong></p>
                <ul className="space-y-2 text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Extracting the hardware id from an attestation performed through the cloud control plane (e.g., OVH's serial console), verifiable via zk-TLS</li>
                  <li>vTPM-based cryptographic claims issued by hyperscalers (as described in <em>arXiv preprint arXiv:2510.12469, 2025</em>)</li>
                  <li>Cryptographic proofs generated by tamper-evident RFID beacons</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold mb-4">Level 3: Continuous Monitoring</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Provides Level 2 security with ongoing monitoring to ensure sustained hardware integrity and detect any violations in near-real time.
                </p>
                <p className="text-gray-700 leading-relaxed"><strong>Examples:</strong></p>
                <ul className="space-y-2 text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Periodic checks or re-attestations using any Level-2 verification method</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-10">5. Registry</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The registry is a transparency log that records the latest verified hardware IDs under each vendor. Anyone should be able to verify that a given piece of hardware is included in the registry.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Privacy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Although the registry is public, it does not need to disclose the full list of hardware IDs. This approach keeps the transparency log succinct while preserving vendor privacy. Privacy can be achieved by committing to a list rather than publishing it directly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For instance, each vendor may register the Merkle tree root representing its verified hardware set. A user who possesses a hardware ID and its Merkle proof can independently verify inclusion.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Transactions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The transparency log must record all changes to registered hardware identities. Each change is expressed as a transaction of the form:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>Update(vendor, newCommitment, signatures)</code>
            </pre>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Entries</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The evidence associated with a verified hardware unit is organized as a <strong>Proof-of-Cloud entry</strong>, which is stored as a key-value record:
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
              <li>
                <strong>Key:</strong> <code className="bg-gray-100 px-2 py-1 rounded">platform_uid</code> - a string to uniquely identify the hardware
                <ul className="space-y-2 list-disc pl-6 mt-2">
                  <li>Intel TDX: <code className="bg-gray-100 px-2 py-1 rounded">intel:tdx:ppid:...</code></li>
                  <li>AMD SEV-SNP: <code className="bg-gray-100 px-2 py-1 rounded">amd:snp:chipid:...</code></li>
                </ul>
              </li>
              <li>
                <strong>Values:</strong>
                <ul className="space-y-2 list-disc pl-6 mt-2">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">method</code> - how the verification was performed</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">level</code> - verification level (1-3)</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">evidences[]</code> - an array of binary artifacts supporting the verification; contents depend on the verification method</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">timestamp</code> - when the verification was completed</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">endorsements[]</code> - signatures from Proof-of-Cloud members indicating their endorsement (either as witnesses or as independent verifiers of the evidence)</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Revocation list</h3>
            <p className="text-gray-700 leading-relaxed">TBD</p>

            <h2 className="text-3xl font-bold mb-6 mt-10">6. Incidents & Amendments</h2>

            <h3 className="text-2xl font-semibold mb-4">Flagging SLA</h3>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc pl-6 mb-6">
              <li>Verification WG triages within <strong>72h</strong></li>
              <li>Emergency quorum may <strong>freeze</strong> an entry</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Amendments</h3>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc pl-6">
              <li>Editorial: simple majority</li>
              <li>Security-relevant: 2/3</li>
            </ul>
          </article>

          <div className="mt-12">
            <Link href="/" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}