import Image from "next/image";
import WaitlistForm from "./ui/WaitlistForm";

export default function Hero() {
  return (
    <section id="get-started" className="overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr] md:items-center md:py-28 lg:py-32">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-[68px]">
            Pain relief that actually works.{" "}
            <span className="text-text-secondary">
              Prescribed by doctors. Delivered to your door.
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Prescription-strength compounded pain creams — personalized to your
            condition, shipped monthly. No pills. No opioids. No waiting rooms.
          </p>

          <WaitlistForm buttonText="Start Your Free Assessment" />

          {/* Trust line */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
            {[
              "Licensed physicians",
              "Pharmacy-compounded",
              "Ships in 3-5 days",
              "Cancel anytime",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Product visual */}
        <div className="flex items-center justify-center">
          <Image
            src="/product-tube.png"
            alt="SoothRx prescription pain relief cream tube"
            width={500}
            height={500}
            priority
            className="w-full max-w-[400px] rounded-2xl md:max-w-[440px] lg:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
