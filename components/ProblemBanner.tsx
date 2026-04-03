export default function ProblemBanner() {
  return (
    <section className="bg-background-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-2xl leading-relaxed text-text-on-dark sm:text-3xl md:text-4xl">
          50 million Americans live with chronic pain.
          <br className="hidden sm:block" />{" "}
          Most are stuck choosing between pills that wreck their stomach
          and creams that barely work.
        </p>
        <p className="mt-8 font-heading text-2xl font-semibold text-secondary sm:text-3xl md:text-4xl">
          There&apos;s a better option.
        </p>
      </div>
    </section>
  );
}
