export default function ProductTube({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SoothRx prescription pain relief cream tube"
    >
      {/* Tube cap */}
      <rect x="105" y="12" width="70" height="40" rx="6" fill="#1B2B3A" />
      <rect x="110" y="8" width="60" height="12" rx="4" fill="#162433" />

      {/* Tube cap ridge lines */}
      <line x1="115" y1="22" x2="115" y2="44" stroke="#0F1A24" strokeWidth="0.5" opacity="0.4" />
      <line x1="125" y1="22" x2="125" y2="44" stroke="#0F1A24" strokeWidth="0.5" opacity="0.4" />
      <line x1="135" y1="22" x2="135" y2="44" stroke="#0F1A24" strokeWidth="0.5" opacity="0.4" />
      <line x1="145" y1="22" x2="145" y2="44" stroke="#0F1A24" strokeWidth="0.5" opacity="0.4" />
      <line x1="155" y1="22" x2="155" y2="44" stroke="#0F1A24" strokeWidth="0.5" opacity="0.4" />
      <line x1="165" y1="22" x2="165" y2="44" stroke="#0F1A24" strokeWidth="0.5" opacity="0.4" />

      {/* Tube neck */}
      <path d="M112 52 L96 80 L184 80 L168 52 Z" fill="#F5F3EE" />

      {/* Tube body */}
      <rect x="72" y="80" width="136" height="300" rx="8" fill="#F5F3EE" />

      {/* Subtle tube body shading - left highlight */}
      <rect x="72" y="80" width="20" height="300" rx="8" fill="white" opacity="0.3" />

      {/* Subtle tube body shading - right shadow */}
      <rect x="188" y="80" width="20" height="300" rx="8" fill="#1B2B3A" opacity="0.04" />

      {/* Bottom crimp */}
      <rect x="80" y="370" width="120" height="10" rx="2" fill="#E5E2DC" />
      <line x1="90" y1="375" x2="190" y2="375" stroke="#D1CEC7" strokeWidth="0.5" />

      {/* Gold accent stripe */}
      <rect x="72" y="130" width="136" height="4" fill="#C9A96E" />
      <rect x="72" y="260" width="136" height="2" fill="#C9A96E" opacity="0.5" />

      {/* Brand name */}
      <text
        x="140"
        y="174"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="28"
        fontWeight="700"
        fill="#1B2B3A"
        letterSpacing="2"
      >
        Sooth
        <tspan fill="#C9A96E">Rx</tspan>
      </text>

      {/* Tagline */}
      <text
        x="140"
        y="196"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="9"
        fill="#6B7280"
        letterSpacing="3"
        style={{ textTransform: "uppercase" }}
      >
        PRESCRIPTION PAIN RELIEF
      </text>

      {/* Product details */}
      <text
        x="140"
        y="224"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="11"
        fill="#1B2B3A"
        fontWeight="500"
      >
        Compounded Topical Cream
      </text>

      <text
        x="140"
        y="242"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="9"
        fill="#6B7280"
      >
        Physician-Prescribed Formula
      </text>

      {/* Rx symbol */}
      <circle cx="140" y="284" r="16" fill="none" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
      <text
        x="140"
        y="290"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#C9A96E"
        opacity="0.6"
      >
        Rx
      </text>

      {/* Net weight */}
      <text
        x="140"
        y="330"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="8"
        fill="#9CA3AF"
        letterSpacing="1"
      >
        NET WT. 60g / 2.1 oz
      </text>

      {/* Cream squeeze coming out of cap */}
      <ellipse cx="175" cy="10" rx="18" ry="6" fill="#FAF9F5" stroke="#E5E2DC" strokeWidth="0.5" />
      <ellipse cx="182" cy="6" rx="10" ry="4" fill="#FAF9F5" />
    </svg>
  );
}
