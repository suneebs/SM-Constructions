import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹1650/sqft",
    description: "A budget package with no compromise on quality that includes all construction essentials.",
    features: [
  "Trusted brand steel & cement",
  "Standard floor tiles up to ₹50/sqft",
  "Standard flush doors and window finish",
  "Tractor Emulsion paint finish",
  "Essential kitchen & bathroom fittings",
  "1 Bedroom with interior & wardrobe",
  "Modular kitchen cabinet setup",
],

    tags: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
  },
  {
    name: "Classic",
    price: "₹2030/sqft",
    description: "Best seller with upgraded brands like Jindal Steels, Hindware etc at a considerable price.",
    features: [
  "Superior brand steel & cement",
  "Refined floor tiles up to ₹100/sqft",
  "Elegant teak doors and window finish",
  "Tractor Shyne Emulsion finish",
  "Stylish kitchen & bathroom fittings",
  "2 Bedrooms with interior & wardrobes",
  "Modular kitchen cabinet and premium finishes",
],

    tags: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹2350/sqft",
    description: "An elegant package with modern provisions like solar heater setup, puja room door, etc.",
    features: [
  "Premium brand steel & cement",
  "Premium floor tiles up to ₹140/sqft",
  "Designer teak doors and window finish",
  "Apcolite Premium Emulsion finish",
  "Quality kitchen & bathroom fittings",
  "3 Bedrooms with interior & wardrobes",
  "Modular kitchen cabinet with elegant finish",
],

    tags: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
  },
  {
    name: "Royale",
    price: "₹2585/sqft",
    description: "Ultimate plan with high-end finishes and premium amenities like EV charging, copper gas line.",
    features: [
  "Superior brand steel & cement",
  "Lavish floor tiles up to ₹160/sqft",
  "Designer teak doors and premium window finish",
  "Apex Ultima exterior paint finish",
  "High-end kitchen & bathroom fittings",
  "Wardrobe and bed in every bedroom with interior design",
  "Modular kitchen cabinet with open kitchen concept",
],
    tags: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-gray-50 py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
        >
          Construction Packages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-16"
        >
          Transparent pricing tailored to fit your dreams. Choose a plan that fits your budget and expectations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-6 shadow-md bg-white border ${
                plan.popular ? "border-yellow-600 ring-2 ring-yellow-400" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-yellow-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                  POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-yellow-600 font-semibold text-lg mb-4">{plan.price}</p>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <ul className="text-left space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <div className="flex flex-wrap gap-2 mt-3">
                {plan.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
