"use client";

import { useState } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Conditions", href: "#conditions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-heading text-2xl font-bold tracking-tight text-primary">
          Sooth<span className="text-secondary">Rx</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            Join the Waitlist&nbsp;&rarr;
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-text-secondary transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="mt-2 rounded-lg bg-secondary px-5 py-3 text-center text-base font-medium text-primary"
              onClick={() => setOpen(false)}
            >
              Join the Waitlist&nbsp;&rarr;
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
