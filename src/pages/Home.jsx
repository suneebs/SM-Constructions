import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="mt-16">
      <HeroSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}
