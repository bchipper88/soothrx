const conditionLinks = [
  { label: "Joint Pain", href: "#conditions" },
  { label: "Back Pain", href: "#conditions" },
  { label: "Nerve Pain", href: "#conditions" },
  { label: "Sports Recovery", href: "#conditions" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Telehealth Consent", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-text-on-dark">
              Sooth<span className="text-secondary">Rx</span>
            </span>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-on-dark/60">
              Conditions
            </h4>
            <ul className="space-y-2">
              {conditionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-on-dark/50 transition-colors hover:text-text-on-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-on-dark/60">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-on-dark/50 transition-colors hover:text-text-on-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-on-dark/60">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-on-dark/50 transition-colors hover:text-text-on-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-text-on-dark/10 pt-8">
          <p className="text-xs leading-relaxed text-text-on-dark/30">
            &copy; 2026 SoothRx. All rights reserved. Compounded medications are
            prepared by licensed pharmacies and are not FDA-approved finished
            products. SoothRx is a technology platform that connects patients with
            independent licensed physicians. SoothRx does not prescribe, diagnose,
            or compound medications.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex gap-5">
            {["Instagram", "Facebook", "TikTok"].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="text-text-on-dark/30 transition-colors hover:text-text-on-dark/60"
              >
                <span className="text-sm">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
