// components/CTASection.jsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="relative bg-yellow-700 text-white py-20 text-center"
      style={{
        backgroundImage: "url('/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-yellow-800/70" />
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-3xl font-semibold mb-4 drop-shadow-lg">Ready to Build With Us?</h3>
        <p className="mb-6 text-lg">Let’s bring your dream project to life — with precision and passion.</p>
        <Button variant="outline" className="border-white text-white hover:bg-white/10">Get in Touch</Button>
      </motion.div>
    </section>
  );
}
