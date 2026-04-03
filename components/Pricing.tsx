import Button from "./ui/Button";

const plans = [
  {
    name: "Essential",
    price: "$69",
    intro: "$49 first month",
    popular: false,
    features: [
      "One compounded pain cream (30-day supply)",
      "Physician oversight & prescription",
      "Unlimited messaging with care team",
      "Free shipping",
    ],
  },
  {
    name: "Complete",
    price: "$99",
    intro: "$69 first month",
    popular: true,
    features: [
      "Two compounded creams OR cream + supplement stack",
      "Physician oversight & prescription",
      "Unlimited messaging with care team",
      "Quarterly check-in consultation",
      "Free shipping",
    ],
  },
  {
    name: "Premium",
    price: "$149",
    intro: "$99 first month",
    popular: false,
    features: [
      "Advanced formulation (ketamine-based)",
      "Standard cream included",
      "Physician oversight & prescription",
      "Quarterly video consultation",
      "Priority shipping",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Everything included. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                plan.popular
                  ? "border-secondary shadow-md scale-[1.02]"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-primary">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-text-secondary">/month</span>
              </div>
              <p className="mt-1 text-sm text-secondary font-medium">
                {plan.intro}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-text-secondary">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href="#get-started"
                variant={plan.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                Get Started&nbsp;&rarr;
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-text-secondary">
          All plans include a 30-day satisfaction guarantee. HSA/FSA eligible. No
          insurance needed.
        </p>
      </div>
    </section>
  );
}
