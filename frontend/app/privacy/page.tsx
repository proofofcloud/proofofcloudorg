import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <main className="flex flex-col">
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white text-center">
        <div className="container px-8 mx-auto" style={{ maxWidth: '1000px' }}>
          <h1 className="text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">
            How Proof of Cloud collects, uses, and protects information on proofofcloud.org.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-8 mx-auto" style={{ maxWidth: '960px' }}>
          <article className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm">
            <p className="text-sm text-gray-600 mb-6"><strong>Last Updated:</strong> October 27, 2025</p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              This Privacy Policy describes how Proof of Cloud ("Proof of Cloud," "we," "us," or "our") collects, uses, and shares information when you visit <code className="bg-gray-100 px-2 py-1 rounded">proofofcloud.org</code>, engage with associated subdomains, APIs, or developer sandboxes, or interact with our documentation and community resources (collectively, the "Services"). By using the Services, you consent to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Information you provide directly</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Contact details such as name, email address, organization, and role when you sign up for updates, request sandbox access, or contact us.</li>
              <li>TEE attestation artifacts, registry metadata, or other technical submissions you provide for verification or evaluation.</li>
              <li>Feedback, support requests, and other communications you send to Proof of Cloud.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically collected information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Log data including IP address, browser type, operating system, referring URLs, and pages viewed.</li>
              <li>Usage analytics such as feature interactions, timestamps, and performance metrics.</li>
              <li>Cookie identifiers or similar technologies that help us understand site usage patterns.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Sensitive attestation material</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Attestation quotes and related cryptographic evidence may contain hardware identifiers, provisioning data, or cloud instance metadata. You should only submit such materials if you have proper authorization and understand that we process them for verification, auditing, and registry purposes. We treat these materials as confidential and apply heightened safeguards, but we cannot guarantee that they are free of personal data.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Operate, maintain, and improve the Services.</li>
              <li>Verify TEE attestations, manage registry entries, and produce transparency reports.</li>
              <li>Respond to inquiries, provide support, and communicate with you about updates or new features.</li>
              <li>Monitor security, detect abuse, and enforce our Terms of Service.</li>
              <li>Analyze usage trends to guide product development and alliance governance decisions.</li>
              <li>Comply with legal obligations and defend our legal rights.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Legal Bases for Processing (EEA/UK)</h2>
            <p className="text-gray-700 mb-4">If you are located in the European Economic Area or the United Kingdom, we process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Contractual necessity</strong> when we provide Services you request.</li>
              <li><strong>Legitimate interests</strong> such as improving the Services, ensuring security, and preventing fraud.</li>
              <li><strong>Consent</strong> when you opt in to receive communications or submit optional data.</li>
              <li><strong>Legal obligations</strong> where processing is required by applicable law.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. How We Share Information</h2>
            <p className="text-gray-700 mb-4">We do not sell personal information. We may share information in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>With service providers and contractors that help us operate the Services (e.g., hosting, analytics, security tooling) under confidentiality obligations.</li>
              <li>With member organizations of the Proof of Cloud alliance when necessary to perform joint verification, audits, or governance duties.</li>
              <li>In connection with a merger, acquisition, or other corporate transaction involving Proof of Cloud, subject to appropriate safeguards.</li>
              <li>If required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Proof of Cloud, our users, or others.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Cookies and Similar Technologies</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We use cookies and similar technologies to remember preferences, understand usage patterns, and improve site performance. You can adjust your browser settings to refuse cookies or alert you when cookies are served. Note that disabling cookies may affect certain features of the Services.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We retain information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Attestation materials and registry records may be retained to maintain auditability and historical integrity unless you request deletion and we are able to accommodate it without compromising alliance obligations.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Security</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We implement administrative, technical, and physical safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction. These measures include access controls, encrypted storage for sensitive materials, and regular security reviews. No method of transmission or storage is completely secure; we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Proof of Cloud operates globally and may process information in the United States and other countries. When transferring personal data from the EEA, UK, or Switzerland, we rely on appropriate safeguards such as Standard Contractual Clauses or other lawful transfer mechanisms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Access, correct, update, or delete personal information we hold about you.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Receive a copy of your personal data in a portable format.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To exercise these rights, contact us at <a href="mailto:privacy@proofofcloud.org" className="text-blue-600 hover:underline">privacy@proofofcloud.org</a>. We may request verification of your identity before responding.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">10. Communications Preferences</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You can opt out of marketing emails by using the unsubscribe link included in those communications. Even if you opt out, we may still send transactional or service-related messages.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Services are not directed to children under 16, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can take appropriate action.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update this policy to reflect changes in our practices or applicable laws. When we do, we will revise the "Last Updated" date and, if changes are material, provide additional notice. We encourage you to review this policy regularly.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, reach out to <a href="mailto:privacy@proofofcloud.org" className="text-blue-600 hover:underline">privacy@proofofcloud.org</a> or <a href="mailto:contact@proofofcloud.org" className="text-blue-600 hover:underline">contact@proofofcloud.org</a>.
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