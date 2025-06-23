import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      className="relative text-white py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll", // Use 'fixed' if desired
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h3 className="text-4xl font-bold mb-4 drop-shadow-md">
          Ready to Build With Us?
        </h3>
        <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether it’s a luxury residence or a large-scale commercial facility, SM Constructions is committed to delivering your vision with excellence, precision, and trust.
        </p>

        {/* Button */}
        <Link to="/contact">
        <Button
          variant="outline"
          className="text-black cursor-pointer border-white px-8 py-3 text-base "
        >
          Get in Touch
        </Button>
        </Link>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm md:text-base">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-yellow-400">600+</span>
            <p className="mt-2">Projects Delivered</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-yellow-400">49 Years</span>
            <p className="mt-2">Industry Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-yellow-400">100%</span>
            <p className="mt-2">Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
