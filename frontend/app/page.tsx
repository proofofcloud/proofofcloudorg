import { VerificationFormWithLabel } from "@/components/verification-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section with Stats */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: 'url(/assets/clouds_hero.png) center/cover no-repeat, linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}>
        
        <div className="container relative z-10 text-center px-8 mx-auto" style={{ maxWidth: '1200px' }}>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Proof of Cloud
          </h1>
          <p className="text-xl max-w-4xl mx-auto mb-8 opacity-95 leading-relaxed">
          Verify your confidential workloads run on legitimate cloud hardware in secure facilities, with the database governed and maintained by the Proof of Cloud Alliance.
          </p>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verify" className="py-16 bg-white">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1200px' }}>
          <h2 className="text-4xl font-bold text-center mb-4">Verify an Attestation</h2>          
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-10 border border-gray-200">
            <VerificationFormWithLabel />
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-16 bg-white">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1200px' }}>
          <h2 className="text-4xl font-bold text-center mb-4">Why Proof of Cloud</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          No security model is perfect. But requiring an attacker to break both the TEE and physically compromise a verified facility creates two independent security barriers instead of one. That's the foundation of defense in depth.
          </p>

          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>

          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Proof of Cloud maintains a public registry binding hardware IDs to verified physical locations. An attacker now needs to break your TEE and physically compromise a facility that multiple independent organizations have verified.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Hardware Identity
              </h3>
              <p className="text-gray-600 leading-relaxed">
              TEE attestation generates a quote that binds a unique hardware ID—Intel's DCAP PPID or AMD's Chip ID—to your measurements. That hardware ID becomes the key.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Independent Verification
              </h3>
              <p className="text-gray-600 leading-relaxed">
              Alliance members independently verify where that hardware lives. They visit facilities, boot fresh hardware, extract IDs through attestation, and cross-verify each other. No single organization controls the registry.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2"/>
                </svg>
                Transparent Registry
              </h3>
              <p className="text-gray-600 leading-relaxed">
              Verified entries go into an append-only signed log, similar to Certificate Transparency. Updates require a quorum of alliance signatures. All evidence is public and auditable.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Members Section */}
      <section id="members" className="py-16 bg-gray-50">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1200px' }}>
          <h2 className="text-4xl font-bold text-center mb-4">Alliance Members</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Maintained by leaders in confidential computing and privacy-preserving infrastructure.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-2xl border border-gray-200 p-3">
                <Image src="/assets/scrt.png" alt="Secret Network" width={96} height={96} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Secret Network</h3>
              <p className="text-gray-600 mb-4">Privacy-first blockchain platform enabling programmable privacy through secure enclaves and confidential smart contracts.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-2xl border border-gray-200 p-3">
                <Image src="/assets/phala.png" alt="Phala" width={96} height={96} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Phala</h3>
              <p className="text-gray-600 mb-4">Hardware-secured compute platform that delivers Confidential AI with enterprise-grade privacy.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300 text-center">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-2xl border border-gray-300">
                <span className="text-4xl text-gray-400">+</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Your Organization</h3>
              <p className="text-gray-600 mb-4">Join the alliance and help build a transparent, verifiable registry for confidential computing infrastructure.</p>
              <a href="mailto:contact@proofofcloud.org" className="text-blue-600 font-semibold hover:underline">Apply to Join →</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 bg-white">
      <div className="container px-8 mx-auto" style={{ maxWidth: "1200px" }}>
          <h2 className="text-4xl font-bold text-center mb-4">Verification Levels</h2>

          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          We define 3 levels of verification, with higher levels indicating stronger security guarantees. These levels are intentionally defined abstractly, allowing flexibility for future evolution of detailed verification methodologies.
          </p>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded font-semibold text-sm mb-4">
                  Level 1
                </div>
                <h4 className="font-semibold text-lg mb-2">Level 1: Human-Assisted</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A trusted witness visits the datacenter, boots hardware, runs attestation,
                  records video proof. Multiple alliance members cross-verify. To fake this,
                  you&apos;d need colluding witnesses across independent organizations.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-cyan-500">
                <div className="inline-block bg-cyan-500 text-white px-3 py-1 rounded font-semibold text-sm mb-4">
                  Level 2
                </div>
                <h4 className="font-semibold text-lg mb-2">Level 2: Automated</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  No humans required. Uses zk-TLS proofs of cloud console attestations, vTPM
                  claims, or tamper-evident RFID beacons cryptographically bound to hardware
                  IDs. You only need to trust the cryptographic construction.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                <div className="inline-block bg-teal-500 text-white px-3 py-1 rounded font-semibold text-sm mb-4">
                  Level 3
                </div>
                <h4 className="font-semibold text-lg mb-2">Level 3: Continuous Monitoring</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Everything from Level 2, plus ongoing monitoring. Periodic re-attestations,
                  continuous RFID heartbeats, real-time tamper detection. An attacker would
                  need sustained compromise without being detected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Secure */}
      <section className="py-16 bg-gray-50">
        <div className="container px-8 mx-auto" style={{ maxWidth: '900px' }}>
          <h2 className="text-4xl font-bold text-center mb-12">Why This Is Secure</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-blue-600 font-bold text-xl shrink-0">→</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hardware IDs come from TEE attestation—you can't spoof them without breaking the TEE itself.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 font-bold text-xl shrink-0">→</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Verification requires physical presence at the facility. You can't do it remotely.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 font-bold text-xl shrink-0">→</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Registry updates require a supermajority of alliance members. No single party can add fraudulent entries.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 font-bold text-xl shrink-0">→</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The log is append-only. You can't retroactively tamper with old entries.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 font-bold text-xl shrink-0">→</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                All verification evidence is publicly auditable. Anyone can challenge an entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-white">
        <div className="container px-8 mx-auto" style={{ maxWidth: '900px' }}>
          <h2 className="text-4xl font-bold text-center mb-12">Common Questions</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What prevents fraudulent registry entries?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Multi-signature supermajority quorum required. All verification evidence is public and auditable. Any member can challenge entries.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What if facility security is compromised after verification?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Level 2+ includes automated re-verification. Level 3 adds continuous monitoring. Users set their own freshness requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Does this replace TEE security?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                No. This is defense in depth. TEE attestation and physical verification are independent security layers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What if a verification witness is compromised?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cross-verification by multiple independent members. Majority consensus required.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">How are replay attacks prevented?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Verification requires a random challenge (nonce) committed to the attestation quote's reportData field. Each verification uses a fresh, unique challenge, making replay attacks impossible during the verification process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Section */}
      <section id="charter" className="py-16 bg-gray-50">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1200px' }}>
          <h2 className="text-4xl font-bold text-center mb-4">Alliance Charter</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our governance framework, verification procedures, and operational principles.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Purpose</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Proof of Cloud is a vendor-neutral alliance that maintains a signed, append-only registry of cloud-hosted server hardware identities (e.g., modern TEE identities such as Intel SGX/TDX PPIDs and AMD SEV-SNP chip IDs), along with the evidence and endorsements establishing each entry's verification level.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-10 text-blue-600">Governance Structure</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li><strong>Membership:</strong> One company = one member = one vote. All members have equal standing.</li>
              <li><strong>Chair:</strong> Elected for 6-month terms; sets agendas, moderates votes, and acts as tie-breaker.</li>
              <li><strong>Quorum:</strong> Simple majority (e.g., 5 of 8 members) required for decisions.</li>
              <li><strong>Security-critical changes:</strong> Schema modifications and emergency revocations require ≥2/3 of all members.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-10 text-blue-600">Working Groups</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li><strong>Verification WG:</strong> Daily onboarding, evidence review, and revocation proposals.</li>
              <li><strong>Methodologies WG:</strong> Maintains verification methods, proof templates, threat models, and schemas.</li>
              <li><strong>Ops & Outreach WG:</strong> Website, registry infrastructure, cryptographic keys, snapshots, and community engagement.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-10 text-blue-600">Scope & Non-Goals</h3>
            <p className="text-gray-700 mb-2"><strong>In Scope:</strong> Verification levels, registry procedures, signed snapshots, and hardware identity validation.</p>
            <p className="text-gray-700 mb-8"><strong>Out of Scope:</strong> The alliance does not guarantee protection against all physical attacks, certify full operational security, or coordinate pricing/capacity (antitrust safe harbor).</p>

            <h3 className="text-2xl font-bold mb-4 mt-10 text-blue-600">Registry & Privacy</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Registry entries include platform UID, verification level, evidence hashes, monitoring cadence, endorsements, and timestamps. Public views default to salted hashes of PPIDs/Chip IDs; full values visible to members for legitimate security purposes.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-10 text-blue-600">Incident Response</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Flagged entries are triaged by the Verification WG within 72 hours. Emergency quorum may freeze entries pending investigation. Amendments follow either simple majority (editorial) or 2/3 vote (security-relevant).
            </p>

            <Link href="/charter" className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              View Full Charter
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white text-center">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1000px' }}>
          <h2 className="text-3xl font-bold mb-6">Join the Alliance</h2>
          <p className="text-lg mb-10 opacity-95">
            Help build transparent, verifiable infrastructure for confidential computing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://forms.gle/kcradbEPmp9ZUbhx8" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">
              Apply for Membership
            </a>
            <a href="#documentation" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Read Documentation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}