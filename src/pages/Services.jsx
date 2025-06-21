import { motion } from "framer-motion";
import { Hammer, Building2, Ruler, Home } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    icon: <Home className="w-8 h-8 text-yellow-600" />,
    description:
      "We craft personalized living spaces that combine elegance and practicality. Whether it’s a luxury villa or a compact home, we ensure structural quality and aesthetic appeal.",
  },
  {
    title: "Commercial Infrastructure",
    icon: <Building2 className="w-8 h-8 text-yellow-600" />,
    description:
      "From office towers to retail spaces, we build commercial hubs that reflect business excellence, accessibility, and modern design principles.",
  },
  {
    title: "Interior Fit-Outs",
    icon: <Ruler className="w-8 h-8 text-yellow-600" />,
    description:
      "We offer turnkey interior solutions — corporate spaces, showrooms, homes — tailored for functionality, finish, and a high-end look and feel.",
  },
  {
    title: "Renovation & Restoration",
    icon: <Hammer className="w-8 h-8 text-yellow-600" />,
    description:
      "Whether it’s reviving heritage structures or modernizing outdated spaces, we preserve architectural legacy while ensuring functional upgrades.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 px-4" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
        >
          What We Do Best
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 mb-14"
        >
          With over 48 years of industry expertise, SM Constructions delivers high-impact civil, commercial, and residential solutions — on time, on budget, and beyond expectations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4 mx-auto group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 bg-yellow-50 p-10 rounded-lg max-w-4xl mx-auto shadow-md"
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-3">
            Looking to start a project?
          </h4>
          <p className="text-gray-700 mb-6">
            Let’s build something extraordinary together. Reach out to us for a personalized consultation or to request a detailed project estimate.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
