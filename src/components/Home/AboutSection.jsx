import { motion } from "framer-motion";
import about2 from "@/assets/about2.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            49+ Years of Trusted Construction
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            SM Constructions Private Limited, founded in 1975 in Malappuram, has become one of Kerala's most respected construction companies. With a record of completing 500+ projects, we specialize in high-quality residential, commercial, and public infrastructure developments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">600+ Projects</h3>
              <p className="text-sm text-gray-500">Across residential, commercial & industrial sectors</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">Established in 1975</h3>
              <p className="text-sm text-gray-500">Over 49 years of consistent excellence</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">ISO Certified</h3>
              <p className="text-sm text-gray-500">Committed to international construction standards</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">Trusted Workforce</h3>
              <p className="text-sm text-gray-500">Hundreds of skilled engineers and workers</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Company Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={about2}
            alt="SM Constructions Building"
            className="w-full rounded-xl shadow-lg object-cover h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
