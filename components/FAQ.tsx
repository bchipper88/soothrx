"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is SoothRx different from over-the-counter pain creams?",
    a: "SoothRx creams are physician-prescribed compounds containing multiple active pharmaceutical ingredients at prescription-strength concentrations. Unlike OTC products that typically contain a single ingredient (menthol or capsaicin), our creams combine anti-inflammatories, nerve-calming agents, muscle relaxants, and local anesthetics to target pain through multiple pathways simultaneously.",
  },
  {
    q: "Do I need to see a doctor in person?",
    a: "No. Everything is done online. You complete a pain assessment, a licensed physician reviews your information, and if appropriate, prescribes a custom-compounded cream shipped directly to you.",
  },
  {
    q: "Are compounded medications safe?",
    a: "Compounded medications are prepared by state-licensed, accredited pharmacies using FDA-approved pharmaceutical ingredients. While the final compounded product itself is not FDA-approved (this applies to all compounded medications, not just ours), the individual ingredients are well-established and your physician selects the formulation based on your specific needs.",
  },
  {
    q: "How quickly will I feel results?",
    a: "Many patients notice improvement within 1-2 weeks of consistent use. Full effects typically develop over 2-4 weeks as the active ingredients build up in the target area. Your physician may adjust your formulation based on your response.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can pause, adjust, or cancel your subscription at any time through your patient portal.",
  },
  {
    q: "Do you accept insurance?",
    a: "SoothRx is a cash-pay service. We do not bill insurance directly, but many of our plans are HSA/FSA eligible. Our pricing is typically 50-70% less than what you'd pay for the same compounds through a traditional pain clinic.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Common questions
        </h2>

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="flex w-full items-center justify-between py-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-lg font-medium text-primary">
                  {faq.q}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <div>
                  <p className="pb-6 leading-relaxed text-text-secondary">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
