import WaitlistForm from "./ui/WaitlistForm";

export default function Testimonials() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          What our patients are saying
        </h2>

        <p className="mt-6 text-lg text-text-secondary">
          Join <span className="font-semibold text-primary">1,200+</span> people
          on the waitlist
        </p>

        <blockquote className="mx-auto mt-10 max-w-xl">
          <p className="font-heading text-xl italic leading-relaxed text-primary md:text-2xl">
            &ldquo;I&apos;ve been waiting for something like this. I&apos;m tired of taking
            ibuprofen every day and my doctor says there&apos;s nothing else to
            try.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-text-secondary">
            — Waitlist survey response
          </footer>
        </blockquote>

        <div className="mt-12">
          <WaitlistForm
            showExtras
            buttonText="Join the Waitlist — Founding Members Get 50% Off First Month"
            className="mx-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
