import { motion } from "framer-motion";
import {
  Hammer,
  Building2,
  Ruler,
  Home,
  HardHat,
  Paintbrush2,
  Wrench,
  Landmark,
  Spline,
  Sparkle,
  Trees,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Turnkey Projects",
    icon: <Landmark className="w-8 h-8 text-yellow-600" />,
    description:
      "End-to-end execution of your entire project — from design and approvals to handing over the key — with complete accountability and craftsmanship.",
  },
  {
    title: "Labour Contract",
    icon: <HardHat className="w-8 h-8 text-yellow-600" />,
    description:
      "Skilled manpower for civil construction works on contract basis, ensuring quality, safety, and timely delivery.",
  },
  {
    title: "Site Supervision",
    icon: <Ruler className="w-8 h-8 text-yellow-600" />,
    description:
      "Experienced professionals to oversee your site’s day-to-day progress, ensuring compliance, accuracy, and best practices.",
  },
  {
    title: "Renovation & Restoration",
    icon: <Hammer className="w-8 h-8 text-yellow-600" />,
    description:
      "Breathing new life into old spaces. We modernize, upgrade, or restore structures while preserving architectural essence.",
  },
  {
    title: "Plumbing & Electrical",
    icon: <Wrench className="w-8 h-8 text-yellow-600" />,
    description:
      "Complete MEP solutions including water supply, drainage, and wiring by certified technicians adhering to safety standards.",
  },
  {
    title: "Plastering & Finishes",
    icon: <Layers className="w-8 h-8 text-yellow-600" />,
    description:
      "Smooth, crack-free plastering services using premium materials for a flawless base that lasts decades.",
  },
  {
    title: "Painting",
    icon: <Paintbrush2 className="w-8 h-8 text-yellow-600" />,
    description:
      "Interior and exterior painting using trusted brands and methods that ensure long-lasting aesthetic appeal and surface protection.",
  },
  {
    title: "Interior Works",
    icon: <Sparkle className="w-8 h-8 text-yellow-600" />,
    description:
      "Functional, elegant, and tailor-made interiors for homes, offices, and commercial spaces that reflect your lifestyle or brand.",
  },
  {
    title: "Truss Work",
    icon: <Spline className="w-8 h-8 text-yellow-600" />,
    description:
      "Strong, weather-resistant roofing structures using top-grade materials, executed with precision engineering.",
  },
  {
    title: "Tile Work",
    icon: <Building2 className="w-8 h-8 text-yellow-600" />,
    description:
      "Installation of floor and wall tiles with superior finishing and alignment, using anti-skid and designer options as needed.",
  },
  {
    title: "Landscape Development",
    icon: <Trees className="w-8 h-8 text-yellow-600" />,
    description:
      "Green spaces, paving, lighting, and garden architecture to enhance aesthetics and promote sustainability.",
  },
  {
    title: "Residential & Commercial Construction",
    icon: <Home className="w-8 h-8 text-yellow-600" />,
    description:
      "From villas to commercial complexes, we build premium spaces with quality, transparency, and unmatched attention to detail.",
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
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 mb-14"
        >
          At SM Constructions, we provide complete civil, commercial, and turnkey solutions backed by over 48 years of trust and excellence. Here’s a list of our core offerings.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 bg-yellow-50 p-10 rounded-lg max-w-4xl mx-auto shadow-md"
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-3">
            Need Help With Your Next Project?
          </h4>
          <p className="text-gray-700 mb-6">
            Our team is ready to consult, plan, and execute your vision — with unmatched professionalism and results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
