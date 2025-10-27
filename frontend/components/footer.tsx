import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold mb-4">Proof of Cloud</h4>
            <p className="text-sm text-muted-foreground">
              A vendor-neutral alliance for verifiable cloud hardware infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/charter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Charter
                </Link>
              </li>
              <li>
                <Link href="/verification-methods" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Verification Methods
                </Link>
              </li>
              <li>
                <a href="https://github.com/proofofcloud" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@proofofcloud.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  General Inquiries
                </a>
              </li>
              <li>
                <a href="mailto:contact@proofofcloud.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Apply for Membership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/tos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Proof of Cloud Alliance. Open source and vendor-neutral.</p>
        </div>
      </div>
    </footer>
  );
}
