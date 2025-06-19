import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SM Constructions Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-yellow-700 tracking-wide">
            SM Constructions
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative group transition-colors"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 pt-2 border-t border-gray-100 shadow-sm">
          <ul className="space-y-3 text-sm font-medium text-gray-700">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
