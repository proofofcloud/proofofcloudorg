import { Button } from "@/components/ui/button";
import { VerificationForm } from "@/components/verification-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero with integrated verification */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Description */}
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">
                Proof of Cloud
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Verify your confidential workloads run on legitimate cloud hardware in secure facilities.
              </p>
            </div>

            {/* Right: Verification form */}
            <div className="border rounded-2xl p-8 bg-card shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Verify Attestation</h3>
              <VerificationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Members - Logo Wall */}
      <section className="py-12 border-t border-b bg-muted/20">
        <div className="container px-6">
          <div className="flex items-center justify-center gap-2 mb-8">
            <h3 className="text-sm font-medium text-muted-foreground">Alliance Members</h3>
            <span className="text-muted-foreground">·</span>
            <a
              href="mailto:contact@proofofcloud.org"
              className="text-sm text-primary hover:underline"
            >
              Apply to Join →
            </a>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="flex items-center justify-center h-12 w-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image src="/assets/scrt.png" alt="Secret Network" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex items-center justify-center h-12 w-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image src="/assets/phala.png" alt="Phala Network" width={64} height={64} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <article className="space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              No security model is perfect. But requiring an attacker to break both the TEE <em className="italic">and</em> physically compromise a verified facility creates two independent security barriers instead of one. That&apos;s the foundation of defense in depth.
            </p>

            <p className="text-xl text-foreground leading-relaxed pt-2">
              Proof of Cloud maintains a public registry binding hardware IDs to verified physical locations. An attacker now needs to break your TEE <em className="italic">and</em> physically compromise a facility that multiple independent organizations have verified.
            </p>

            <h2 className="text-4xl font-bold mt-24 mb-10 pt-8">How it works</h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                TEE attestation generates a quote that binds a unique hardware ID—Intel&apos;s DCAP PPID or AMD&apos;s Chip ID—to your measurements. That hardware ID becomes the key.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Alliance members independently verify where that hardware lives. They visit facilities, boot fresh hardware, extract IDs through attestation, and cross-verify each other. No single organization controls the registry.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Verified entries go into an append-only signed log, similar to Certificate Transparency. Updates require a quorum of alliance signatures. All evidence is public and auditable.
              </p>
            </div>

            <h2 className="text-4xl font-bold mt-24 mb-10 pt-8">Three levels of verification</h2>

            <div className="space-y-10">
              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-2xl font-semibold mb-4">Level 1: Human-Assisted</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A trusted witness visits the datacenter, boots hardware, runs attestation, records video proof. Multiple alliance members cross-verify. To fake this, you&apos;d need colluding witnesses across independent organizations.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-2xl font-semibold mb-4">Level 2: Automated</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No humans required. Uses zk-TLS proofs of cloud console attestations, vTPM claims, or tamper-evident RFID beacons cryptographically bound to hardware IDs. You only need to trust the cryptographic construction.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-2xl font-semibold mb-4">Level 3: Continuous Monitoring</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Everything from Level 2, plus ongoing monitoring. Periodic re-attestations, continuous RFID heartbeats, real-time tamper detection. An attacker would need sustained compromise without being detected.
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-bold mt-24 mb-10 pt-8">Why this is hard to fake</h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="text-primary font-bold text-lg shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hardware IDs come from TEE attestation—you can&apos;t spoof them without breaking the TEE itself.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-lg shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Verification requires physical presence at the facility. You can&apos;t do it remotely.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-lg shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Registry updates require a supermajority of alliance members. No single party can add fraudulent entries.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-lg shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The log is append-only. You can&apos;t retroactively tamper with old entries.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-lg shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  All verification evidence is publicly auditable. Anyone can challenge an entry.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold mb-16">Common Questions</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What prevents fraudulent registry entries?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Multi-signature supermajority quorum required. All verification evidence is public and auditable. Any member can challenge entries.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What if facility security is compromised after verification?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Level 2+ includes automated re-verification. Level 3 adds continuous monitoring. Users set their own freshness requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Does this replace TEE security?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No. This is defense in depth. TEE attestation and physical verification are independent security layers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What if a verification witness is compromised?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cross-verification by multiple independent members. Majority consensus required.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">How are replay attacks prevented?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Verification requires a random challenge (nonce) committed to the attestation quote's reportData field. Each verification uses a fresh, unique challenge, making replay attacks impossible during the verification process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 border-t bg-muted/30">
        <div className="container max-w-4xl text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Learn More</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Read the alliance charter, verification methods, and technical specifications.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/charter">Alliance Charter</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:contact@proofofcloud.org">Apply for Membership</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
