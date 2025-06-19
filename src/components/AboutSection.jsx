// components/AboutSection.jsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <motion.img
          src="/about.jpg"
          alt="About SM Constructions"
          className="rounded-lg shadow-lg object-cover w-full h-[320px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-yellow-700 mb-4">About SM Constructions</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 1975, SM Constructions has delivered 500+ projects across Kerala. We’re experts in residential buildings, commercial complexes, and public infrastructure — combining trust, technology, and timeless design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
