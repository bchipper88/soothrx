import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Pain",
    desc: "Complete a 5-minute assessment about your pain — location, type, severity, and what you've tried. Our AI analyzes your responses instantly.",
    image: "/step-01.jpg",
  },
  {
    num: "02",
    title: "Doctor Reviews & Prescribes",
    desc: "A licensed physician reviews your assessment and prescribes a custom-compounded cream formulated for your specific condition.",
    image: "/step-02.jpg",
  },
  {
    num: "03",
    title: "Delivered Monthly",
    desc: "Your prescription cream ships directly from a licensed pharmacy to your door. Refills are automatic. Adjust or cancel anytime.",
    image: "/step-03.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            How SoothRx works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Doctor-prescribed pain relief in 3 simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={800}
                height={600}
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <span className="text-3xl font-semibold text-secondary">
                  {step.num}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
