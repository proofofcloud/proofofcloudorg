"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/#why", label: "Why" },
    { href: "/#verify", label: "Verify" },
    { href: "/#members", label: "Members" },
    { href: "/#how", label: "How It Works" },
    { href: "/verification-methods", label: "Verification Methods" }, // добавлено
    { href: "/charter", label: "Charter" },
    // убрал mailto: Contact Us
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div
        className="container flex h-16 items-center justify-between mx-auto px-8"
        style={{ maxWidth: "1200px" }}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/proof-of-cloud-logo.png"
            alt="Proof of Cloud logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold text-blue-600">Proof of Cloud</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
