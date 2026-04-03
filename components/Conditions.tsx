const conditions = [
  {
    name: "Joint & Arthritis Pain",
    desc: "Knee, hip, shoulder, and hand pain relief with anti-inflammatory + nerve-calming compounds.",
    ingredients: "Diclofenac · Gabapentin · Lidocaine",
  },
  {
    name: "Back & Muscle Pain",
    desc: "Lower back tension, muscle spasms, and chronic tightness treated at the source.",
    ingredients: "Ketoprofen · Baclofen · Cyclobenzaprine",
  },
  {
    name: "Nerve Pain (Neuropathy)",
    desc: "Diabetic neuropathy, post-surgical nerve pain, and sciatica — without systemic side effects.",
    ingredients: "Ketamine · Gabapentin · Clonidine",
  },
  {
    name: "Sports & Recovery",
    desc: "Activity-related pain, overuse injuries, and post-workout soreness — targeted and fast.",
    ingredients: "Diclofenac · Lidocaine · Menthol",
  },
];

export default function Conditions() {
  return (
    <section id="conditions" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Targeted relief for chronic pain
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border bg-background p-8 border-l-[3px] border-l-accent"
            >
              <h3 className="text-xl font-semibold text-primary">{c.name}</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{c.desc}</p>
              <p className="mt-4 text-sm font-medium text-accent">{c.ingredients}</p>
              <a
                href="#get-started"
                className="mt-4 inline-block text-sm font-medium text-secondary hover:underline"
              >
                Join the Waitlist&nbsp;&rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
