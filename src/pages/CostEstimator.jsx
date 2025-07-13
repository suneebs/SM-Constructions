import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import packages from "@/data/packages";

export default function CostEstimator() {
  const [package1, setPackage1] = useState("Basic Package");
  const [package2, setPackage2] = useState("Classic Package");
  const [expanded, setExpanded] = useState(null);

  const pkg1 = packages.find((p) => p.name === package1);
  const pkg2 = packages.find((p) => p.name === package2);
  const categories = Object.keys(pkg1?.details || {});

  const toggleCategory = (category) => {
    setExpanded((prev) => (prev === category ? null : category));
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-4 sm:py-8 mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6"
        >
          Construction Package Comparison
        </motion.h1>
        <p className="text-center text-slate-600 text-base md:text-lg max-w-3xl mx-auto mb-14">
          Compare our comprehensive construction packages to find the perfect solution for your project.
          Each package includes detailed specifications and transparent pricing.
        </p>

        {/* Dropdown Selectors */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-14">
          {[package1, package2].map((pkgName, idx) => (
            <div key={idx} className="relative w-full max-w-xs">
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                {`Select ${idx === 0 ? "First" : "Second"} Package`}
              </label>
              <div className="relative">
                <select
                  value={idx === 0 ? package1 : package2}
                  onChange={(e) =>
                    idx === 0 ? setPackage1(e.target.value) : setPackage2(e.target.value)
                  }
                  className="appearance-none w-full border border-slate-300 rounded-md px-4 py-2 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
                >
                  {packages.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 pointer-events-none text-slate-400 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Comparison Table */}
        {pkg1 && pkg2 && (
          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-xl bg-white">
            {categories.map((category) => (
              <div key={category} className="border-b last:border-none">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-6 py-5 bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-lg font-semibold text-slate-800 capitalize tracking-tight">
                    {category}
                  </span>
                  {expanded === category ? (
                    <ChevronDown className="w-5 h-5 text-yellow-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-yellow-600" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {expanded === category && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-8 bg-white"
                    >
                      {/* Package 1 Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-yellow-700 mb-4">
                          {pkg1.name}
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {Object.entries(pkg1.details[category] || {}).map(([key, val]) => (
                            <li key={key}>
                              <span className="font-medium text-slate-900">{key}:</span> {val}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Package 2 Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-yellow-700 mb-4">
                          {pkg2.name}
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {Object.entries(pkg2.details[category] || {}).map(([key, val]) => (
                            <li key={key}>
                              <span className="font-medium text-slate-900">{key}:</span> {val}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
