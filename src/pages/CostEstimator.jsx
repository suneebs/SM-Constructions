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
    <section className="bg-gray-50 py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Construction Package Comparison
        </motion.h1>

        {/* Dropdown Selectors */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          {[package1, package2].map((pkgName, idx) => (
            <div className="relative w-full max-w-xs" key={idx}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {`Select ${idx === 0 ? "First" : "Second"} Package`}
              </label>
              <select
                value={idx === 0 ? package1 : package2}
                onChange={(e) =>
                  idx === 0 ? setPackage1(e.target.value) : setPackage2(e.target.value)
                }
                className="appearance-none border border-gray-300 rounded-md px-4 py-2 pr-10 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
              >
                {packages.map((pkg) => (
                  <option key={pkg.name} value={pkg.name}>
                    {pkg.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-10 pointer-events-none text-gray-400" />
            </div>
          ))}
        </div>

        {/* Expandable Comparison Cards */}
        {pkg1 && pkg2 && (
          <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md">
            {categories.map((category) => (
              <div key={category} className="border-b last:border-none">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-yellow-100 hover:bg-yellow-200 transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-800 capitalize">{category}</span>
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
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6 bg-white"
                    >
                      {/* Package 1 */}
                      <div>
                        <h4 className="text-md font-semibold text-yellow-700 mb-3">
                          {pkg1.name}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {Object.entries(pkg1.details[category] || {}).map(([key, val]) => (
                            <li key={key}>
                              <span className="font-medium text-gray-800">{key}:</span> {val}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Package 2 */}
                      <div>
                        <h4 className="text-md font-semibold text-yellow-700 mb-3">
                          {pkg2.name}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {Object.entries(pkg2.details[category] || {}).map(([key, val]) => (
                            <li key={key}>
                              <span className="font-medium text-gray-800">{key}:</span> {val}
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
