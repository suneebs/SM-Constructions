export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-yellow-700">SM Constructions</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-yellow-600">About</a>
          <a href="#services" className="hover:text-yellow-600">Services</a>
          <a href="#projects" className="hover:text-yellow-600">Projects</a>
          <a href="#contact" className="hover:text-yellow-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
