import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Define navLinks with routing type
  const navLinks = [
    { href: "#about", label: "About", isInternal: true },
    { href: "/services", label: "Services", isInternal: false },
    { href: "#projects", label: "Projects", isInternal: true },
    { href: "#contact", label: "Contact", isInternal: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250); // Allow mobile menu to close before scroll
  };

  return (
    <header className="w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SM Constructions Logo"
            className="w-10 h-10 object-contain rounded shadow"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl md:text-2xl font-bold text-yellow-700 tracking-wide">
              SM Constructions
            </span>
            <span className="text-xs text-gray-500">
              Built on Trust. Backed by Experience
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ href, label, isInternal }) =>
            isInternal ? (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="relative group transition-colors duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className="relative group transition-colors duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <ul className="px-4 pb-4 pt-2 space-y-3 text-sm font-medium text-gray-700">
              {navLinks.map(({ href, label, isInternal }) => (
                <li key={label}>
                  {isInternal ? (
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block py-2 hover:text-yellow-600 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 hover:text-yellow-600 transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
