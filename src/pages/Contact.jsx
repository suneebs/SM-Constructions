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
                  Sm constructions and developers pvt ltd <br />
                  Aishwarya shopping complex, <br />
                  Near grameena Bank, <br />
                  Vattamkulam, <br />
                  Edappal Malappuram  district, <br />
                  Kerala, India <br />
                  679578
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

          {/* Right: Embedded Google Map */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
>
  <iframe
    title="SM Constructions Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.333679166998!2d76.02180947407024!3d10.785735259023944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b9007fa21675%3A0xfc8271f8601f4158!2sVattamkulam%20edappal!5e0!3m2!1sen!2sin!4v1751799444564!5m2!1sen!2sin" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
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
