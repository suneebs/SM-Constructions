import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/Construction.jpg')",
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/60" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md relative inline-block"
          >
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Building the Future
            </span>{" "}
            Since 1975
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl mb-10 text-gray-300 leading-relaxed"
          >
            For over four decades, we’ve delivered iconic residential, commercial, and public infrastructure across Kerala — driven by trust, quality, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link to="/services">
            <Button
              variant="secondary"
              className="px-8 py-3 text-sm cursor-pointer sm:text-base font-medium transition transform hover:scale-105 hover:shadow-xl duration-300"
            >
              Explore Services
            </Button>
            </Link>
            <Link to="/contact">
            <Button
              variant="outline"
              className="px-8 py-3 text-sm cursor-pointer sm:text-base border-white text-black hover:bg-white hover:text-black transition transform hover:scale-105 hover:shadow-xl duration-300"
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
