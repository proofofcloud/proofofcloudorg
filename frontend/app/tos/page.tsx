import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <main className="flex flex-col">
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white text-center">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1000px' }}>
          <h1 className="text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90">
            Standard terms governing your use of proofofcloud.org and related services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-8 mx-auto" style={{ maxWidth: '960px' }}>
          <article className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm">
            <p className="text-sm text-gray-600 mb-6"><strong>Last Updated:</strong> October 27, 2025</p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the Proof of Cloud website located at <code className="bg-gray-100 px-2 py-1 rounded">proofofcloud.org</code>, related subdomains, APIs, documentation, sandbox environments, and any associated content or services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must refrain from using the Services.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. About Proof of Cloud</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Proof of Cloud is a vendor-neutral alliance committed to maintaining a verifiable registry of modern Trusted Execution Environment (TEE) hardware identities and associated attestations. The Services provide informational resources, developer tooling, and demonstration experiences to support confidential computing workloads.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Eligibility and Account Registration</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You may use the Services only if you are at least 18 years old and have the legal capacity to enter into a binding agreement. Certain features may require registering an account or requesting sandbox access. You agree to provide accurate, current, and complete information and to keep that information up-to-date.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use the Services in any manner that violates applicable laws or regulations.</li>
              <li>Attempt to access non-public features, disrupt service availability, or compromise system integrity.</li>
              <li>Submit malicious, fraudulent, or unauthorized attestations or identity artifacts.</li>
              <li>Misrepresent your affiliation with Proof of Cloud or any alliance member.</li>
              <li>Use automated tooling that imposes unreasonable load on our infrastructure.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Attestation Submissions and Registry Data</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Services may allow you to submit TEE attestations or related metadata for verification. You represent and warrant that you have all necessary rights to provide such data, and that the data is accurate to the best of your knowledge. Proof of Cloud may use submitted data to evaluate attestation validity, enrich the registry, or improve verification tooling. We may decline or remove any submission at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Except for content you submit, all materials on the Services—including text, visuals, software, and branding—are owned by Proof of Cloud and its licensors, and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or reverse engineer any portion of the Services without prior written permission.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Feedback</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you submit feedback, ideas, or suggestions, you grant Proof of Cloud a non-exclusive, worldwide, royalty-free, irrevocable license to use, reproduce, and incorporate that feedback without restriction or compensation to you.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Services may reference or integrate third-party services, providers, or open-source projects. Proof of Cloud does not control and is not responsible for third-party content or behavior. Your use of third-party services is subject to their respective terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. Disclaimers</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Services, including any registry data, verification outputs, or sandbox tooling, are provided on an "as is" and "as available" basis. Proof of Cloud disclaims all warranties, express or implied, including any warranties of accuracy, reliability, merchantability, fitness for a particular purpose, and non-infringement. Verification results and registry entries are informational and do not constitute security guarantees or endorsements.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To the maximum extent permitted by law, Proof of Cloud and its contributors will not be liable for any indirect, incidental, consequential, special, or exemplary damages arising from or relating to your use of the Services. Our total liability to you for any claim arising under these Terms will not exceed one hundred U.S. dollars (USD $100) in aggregate.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Proof of Cloud, its contributors, and alliance members from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Services, your submissions, or your violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Suspension and Termination</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may suspend or terminate your access to the Services at any time, with or without notice, if we believe you have violated these Terms or are engaging in behavior that may harm other users or the integrity of the Services. Upon termination, the rights and licenses granted to you will cease immediately.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the State of Delaware, USA, without regard to its conflict of law principles. You consent to the personal jurisdiction and venue of the state and federal courts located in Delaware for any dispute arising out of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">13. Changes to These Terms</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update these Terms from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Material changes will be communicated through the Services or via other reasonable methods. Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">14. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms or need to reach us, contact <a href="mailto:contact@proofofcloud.org" className="text-blue-600 hover:underline">contact@proofofcloud.org</a>.
            </p>
          </article>

          <div className="mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}