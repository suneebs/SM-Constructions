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
  FileText,
  Users2,
  PenTool,
} from "lucide-react";

const services = [
  // --- Core Construction ---
  {
    title: "Turnkey Projects",
    icon: <Landmark className="w-8 h-8 text-yellow-600" />,
    description:
      "End-to-end execution from planning to handover — we manage everything with quality assurance and accountability.",
  },
  {
    title: "Residential & Commercial Construction",
    icon: <Home className="w-8 h-8 text-yellow-600" />,
    description:
      "From villas to complexes, we deliver premium civil structures with integrity and engineering excellence.",
  },
  {
    title: "Labour Contracting",
    icon: <HardHat className="w-8 h-8 text-yellow-600" />,
    description:
      "Experienced civil labour teams for site-based contracting works on a project or time basis.",
  },
  {
    title: "Site Supervision",
    icon: <Ruler className="w-8 h-8 text-yellow-600" />,
    description:
      "Dedicated engineers and supervisors ensure timely progress, quality control, and safety on-site.",
  },

  // --- Specialized Works ---
  {
    title: "Renovation & Restoration",
    icon: <Hammer className="w-8 h-8 text-yellow-600" />,
    description:
      "Transform aging buildings into modern marvels — without losing their character.",
  },
  {
    title: "Plumbing & Electrical",
    icon: <Wrench className="w-8 h-8 text-yellow-600" />,
    description:
      "MEP services including piping, drainage, and complete electrical installations with certified technicians.",
  },
  {
    title: "Plastering & Finishes",
    icon: <Layers className="w-8 h-8 text-yellow-600" />,
    description:
      "Crack-free, smooth finishes using durable plastering techniques for long-lasting walls and ceilings.",
  },
  {
    title: "Painting",
    icon: <Paintbrush2 className="w-8 h-8 text-yellow-600" />,
    description:
      "Premium exterior and interior painting using trusted brands, custom color schemes, and surface prepping.",
  },
  {
    title: "Tile Work",
    icon: <Building2 className="w-8 h-8 text-yellow-600" />,
    description:
      "Wall and floor tile laying with anti-skid options, alignment precision, and aesthetic appeal.",
  },
  {
    title: "Truss & Roofing Works",
    icon: <Spline className="w-8 h-8 text-yellow-600" />,
    description:
      "Strong, leak-proof truss and roofing systems designed for durability and storm resistance.",
  },
  {
    title: "Landscape Development",
    icon: <Trees className="w-8 h-8 text-yellow-600" />,
    description:
      "Green zones, garden architecture, walkways, and outdoor lighting to beautify and add value.",
  },

  // --- Design & Interiors ---
  {
    title: "Interior Design & Fitouts",
    icon: <Sparkle className="w-8 h-8 text-yellow-600" />,
    description:
      "Customized interior planning, modular solutions, and premium furnishing execution for residential and commercial spaces.",
  },
  {
    title: "Plan Drawing (2D, 3D, 3ds Max)",
    icon: <FileText className="w-8 h-8 text-yellow-600" />,
    description:
      "Professional architectural drawings, elevation renders, 3D modeling, and walkthrough-ready visuals.",
  },

  // --- Additional Services ---
  {
    title: "Interior Consultancy",
    icon: <PenTool className="w-8 h-8 text-yellow-600" />,
    description:
      "Concept to execution guidance on colors, furniture, decor, and lighting by skilled interior consultants.",
  },
  {
    title: "Labour Supply & Support",
    icon: <Users2 className="w-8 h-8 text-yellow-600" />,
    description:
      "On-demand skilled and unskilled manpower for any stage of your construction project.",
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
          With a legacy of 49+ years, SM Constructions brings unmatched expertise to every site — offering complete solutions from foundation to finish, civil to creative.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-yellow-50 p-10 rounded-lg max-w-4xl mx-auto shadow"
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-3">
            Let's Get Started
          </h4>
          <p className="text-gray-700 mb-6">
            Whether you're building from scratch or looking to transform your space — we're ready. Let’s talk!
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
