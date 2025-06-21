import { motion } from "framer-motion";

const projects = [
  {
    title: "Hill View Villas",
    image: "/about3.jpg",
    location: "Trivandrum, Kerala",
    description:
      "A luxury gated villa community with contemporary design, solar panels, rainwater harvesting, and premium landscaping.",
    category: "Residential",
  },
  {
    title: "Metro Plaza Commercial Complex",
    image: "/about2.jpg",
    location: "Kochi, Kerala",
    description:
      "A modern commercial hub featuring retail outlets, food courts, and energy-efficient office spaces.",
    category: "Commercial",
  },
  {
    title: "TechZone IT Park",
    image: "/cta-bg.jpg",
    location: "Calicut, Kerala",
    description:
      "A sprawling green-certified IT zone hosting multiple tech startups with plug-and-play office infrastructure.",
    category: "IT & Business",
  },
  {
    title: "Govt. Hospital Block",
    image: "/about1.jpg",
    location: "Kollam, Kerala",
    description:
      "Turnkey public health project with advanced ICU, modular OT, and seamless accessibility for all patients.",
    category: "Public Infrastructure",
  },
  {
    title: "Skyline Luxury Towers",
    image: "/about1.jpg",
    location: "Thrissur, Kerala",
    description:
      "High-rise premium apartments offering skyline views, infinity pools, and smart home automation.",
    category: "Residential",
  },
  {
    title: "Urban Convention Center",
    image: "/about2.jpg",
    location: "Ernakulam, Kerala",
    description:
      "Multi-purpose convention facility with auditorium, banquet hall, exhibition spaces, and advanced AV setups.",
    category: "Commercial",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-yellow-700 mb-3">
            Landmark Projects by SM Constructions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over four decades of architectural brilliance and structural
            precision across Kerala — delivering quality, innovation, and trust.
          </p>
        </motion.div>

        {/* Grid of Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 italic">{project.location}</p>
                <p className="mt-2 text-sm text-gray-700">
                  {project.description}
                </p>
                <span className="mt-3 inline-block text-xs bg-yellow-100 text-yellow-800 font-medium px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-yellow-700">500+</h3>
            <p className="text-gray-600 mt-2">Completed Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-700">48 Years</h3>
            <p className="text-gray-600 mt-2">Experience Since 1975</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-700">30+</h3>
            <p className="text-gray-600 mt-2">Cities Across Kerala</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
