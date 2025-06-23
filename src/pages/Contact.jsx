import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Row with WhatsApp */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-extrabold text-yellow-700"
            >
              Let’s Build Something Together
            </motion.h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Whether it's your dream home, a commercial venture, or public infrastructure—SM Constructions is your trusted partner.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/+918848154050"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700 transition-all"
          >
            <FaWhatsapp className="text-xl" />
            <span className="font-semibold text-base">Chat on WhatsApp</span>
          </motion.a>
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">📍 Address</h3>
              <p className="text-gray-600 leading-relaxed">
                SM Constructions Pvt. Ltd. <br />
                TC 12/34, Vellayambalam, Trivandrum, Kerala 695010
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">✉️ Email</h3>
              <p className="text-gray-600">info@smconstructions.in</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">🕐 Working Hours</h3>
              <p className="text-gray-600">Monday – Saturday: 9:00 AM – 6:00 PM</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-md space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>

            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium text-sm">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-sm">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-medium text-sm">Message</label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 px-6 rounded hover:bg-yellow-700 transition-all"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
