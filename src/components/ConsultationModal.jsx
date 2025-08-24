import { useEffect, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Auto open modal after slight delay
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_or8a9ju", // replace with EmailJS service ID
        "template_f34rsg3", // replace with EmailJS template ID
        formData,
        "ZAhiNp0jqMYyke9Gs" // replace with EmailJS public key
      )
      .then(() => {
  toast.success("Your consultation request has been sent!", {
    style: {
      borderRadius: "8px",
      background: "#333",
      color: "#fff",
      padding: "12px 16px",
    },
  });
  setLoading(false);
  setIsOpen(false);
  setFormData({ name: "", email: "", phone: "" });
})
      .catch((err) => {
        alert("❌ Something went wrong. Please try again.");
        console.error(err);
        setLoading(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Book a Free Consultation
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Share your details and our team will reach out to you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-white font-semibold py-2.5 rounded-lg hover:bg-yellow-600 transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Book Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
}
