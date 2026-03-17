import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import StackedBenefits from "@/components/StackedBenefits";
import CardCoverage from "@/components/CardCoverage";
import Goals from "@/components/Goals";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <StackedBenefits />
      <CardCoverage />
      <Goals />
      <Download />
      <Footer />
    </>
  );
}
