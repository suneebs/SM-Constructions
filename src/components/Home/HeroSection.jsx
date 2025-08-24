import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Construction from "@/assets/Construction.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Construction})`,
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      aria-label="Hero section showcasing SM Constructions"
    >
      {/* SEO Hidden Image for Crawlers */}
      <img
        src={Construction}
        alt="Residential and commercial construction by SM Constructions in Kerala"
        className="hidden"
      />

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center max-w-2xl"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md"
          >
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Building the Future
            </span>{" "}
            Since 1975
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl mb-10 text-gray-300 leading-relaxed"
          >
            For over four decades, we’ve delivered iconic residential, commercial, and public infrastructure across Kerala — driven by trust, quality, and innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link to="/services" aria-label="Explore our services">
              <Button
                variant="secondary"
                className="px-8 py-3 text-sm sm:text-base font-medium transition transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
              >
                Explore Services
              </Button>
            </Link>

            <Link to="/contact" aria-label="Contact SM Constructions">
              <Button
                variant="secondary"
                className="px-8 py-3 text-sm sm:text-base font-medium transition transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
