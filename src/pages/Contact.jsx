import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-20 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* WhatsApp Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-extrabold text-yellow-700"
            >
              Let’s Build Something Together
            </motion.h2>
            <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
              Whether it’s a luxurious residence, an office complex, or a government project —
              we’re here to make it happen. Reach out and let’s talk about your vision.
            </p>
          </div>

          <motion.a
            href="https://wa.me/+9179948 54718"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-all text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </motion.a>
        </div>

        {/* Contact Info + Image Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">📍 Our Office</h3>
              <p className="text-gray-600 leading-relaxed">
                SM Constructions Pvt. Ltd. <br />
                TC 12/34, Vellayambalam, <br />
                Trivandrum, Kerala 695010
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">📞 Phone</h3>
              <p className="text-gray-600">+91 79948 54718</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">✉️ Email</h3>
              <p className="text-gray-600">vpb26539@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">🕐 Office Hours</h3>
              <p className="text-gray-600">Monday – Saturday: 9:00 AM – 6:00 PM</p>
            </div>
          </motion.div>

          {/* Right: Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/about1.jpg" // Replace with a suitable image path (e.g., team photo, site meeting, or construction handshake)
              alt="Contact SM Constructions"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center bg-yellow-50 py-12 px-6 rounded-xl shadow-sm"
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-3">
            Let's Talk About Your Project
          </h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team is just a message away. Whether you're in the planning stage or ready to build,
            we'll help you make informed, confident decisions.
          </p>
          <a
            href="https://wa.me/+9179948 54718"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition text-lg"
          >
            Start WhatsApp Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
