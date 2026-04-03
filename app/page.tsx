import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemBanner from "@/components/ProblemBanner";
import HowItWorks from "@/components/HowItWorks";
import Conditions from "@/components/Conditions";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemBanner />
        <HowItWorks />
        <Conditions />
        <Comparison />
        <Pricing />
        <Testimonials />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
