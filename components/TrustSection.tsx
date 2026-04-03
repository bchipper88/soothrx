const pillars = [
  {
    title: "Licensed Physicians",
    desc: "Every prescription is reviewed and approved by a U.S.-licensed physician. No auto-approvals. No shortcuts.",
    icon: (
      <svg className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Licensed Pharmacies",
    desc: "Your cream is compounded by state-licensed, accredited pharmacies following strict quality standards.",
    icon: (
      <svg className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Questions about your treatment? Message our care team anytime — a real person responds within hours.",
    icon: (
      <svg className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="bg-background-dark px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-3xl font-bold text-text-on-dark sm:text-4xl md:text-5xl">
          Physician-led. Pharmacy-compounded.{" "}
          <span className="text-secondary">Delivered with care.</span>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-on-dark">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-text-on-dark/70">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-text-on-dark/40">
          Compounded medications are prepared by licensed pharmacies but are not
          FDA-approved finished products. All prescriptions require physician
          evaluation and approval.
        </p>
      </div>
    </section>
  );
}
