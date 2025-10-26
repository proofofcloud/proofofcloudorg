"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/charter", label: "Charter" },
    { href: "/verification-methods", label: "Verification Methods" },
    { href: "mailto:contact@proofofcloud.org", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/proof-of-cloud-logo.png"
            alt="Proof of Cloud logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Proof of Cloud</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
