import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import PricingPlans from "../components/Home/PricingPlans";
import GallerySection from "../components/Home/GallerySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PricingPlans />
      <GallerySection />
      <CTASection />
    </main>
  );
}
