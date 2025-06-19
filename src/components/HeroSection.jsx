// components/HeroSection.jsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/construction-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl">
            Building Dreams Since 1975
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Trusted partner in premium residential, commercial, and industrial projects.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="default">Our Services</Button>
            <Button variant="outline" className="text-white border-white">Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
