import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage: "url('/Construction.jpg')",
        backgroundAttachment: "scroll", // Default
  backgroundPosition: "center",
  backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-screen-md"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md leading-tight">
            Building Dreams Since 1975
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Trusted partner in premium residential, commercial, and industrial projects across Kerala.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <Button variant="secondary" className="px-6 py-2 text-sm sm:text-base">
              Our Services
            </Button>
            <Button
              variant="secondary"
              className="px-6 py-2 text-sm sm:text-base "
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
