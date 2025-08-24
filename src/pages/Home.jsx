import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import PricingPlans from "../components/Home/PricingPlans";
import GallerySection from "../components/Home/GallerySection";
import ConsultationModal from "../components/ConsultationModal";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <ConsultationModal />
      <HeroSection />
      <AboutSection />
      <PricingPlans />
      <GallerySection />
      <CTASection />
      <Toaster position="top-right" />
    </main>
  );
}
