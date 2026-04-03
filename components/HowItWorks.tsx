const steps = [
  {
    num: "01",
    title: "Tell Us About Your Pain",
    desc: "Complete a 5-minute assessment about your pain — location, type, severity, and what you've tried. Our AI analyzes your responses instantly.",
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Doctor Reviews & Prescribes",
    desc: "A licensed physician reviews your assessment and prescribes a custom-compounded cream formulated for your specific condition.",
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Delivered Monthly",
    desc: "Your prescription cream ships directly from a licensed pharmacy to your door. Refills are automatic. Adjust or cancel anytime.",
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 013-3h.008a3 3 0 013 3v.375m-6-.375h10.5m0 0v-.375A3.375 3.375 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V4.875c0-.621-.504-1.125-1.125-1.125H9.375c-.621 0-1.125.504-1.125 1.125v2.25c0 .207.168.375.375.375H10.5A3.375 3.375 0 0113.875 10.875v3.375" />
      </svg>
    ),
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
              className="rounded-xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-3xl font-semibold text-secondary">
                  {step.num}
                </span>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
