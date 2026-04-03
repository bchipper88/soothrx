import WaitlistForm from "./ui/WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="bg-background-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-text-on-dark sm:text-4xl md:text-5xl">
          Your pain deserves more than another tube of Icy Hot.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-on-dark/70 md:text-xl">
          Get prescription-strength relief — personalized, doctor-prescribed,
          and delivered to your door.
        </p>

        <div className="mt-10">
          <WaitlistForm
            buttonText="Start Your Free Assessment"
            className="mx-auto max-w-md"
          />
        </div>

        <p className="mt-6 text-sm text-secondary">
          Founding members get 50% off their first month.
        </p>
      </div>
    </section>
  );
}
