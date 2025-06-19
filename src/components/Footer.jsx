export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} SM Constructions Pvt. Ltd. All rights reserved.</p>
        <p className="text-sm mt-1">Designed and developed with care.</p>
      </div>
    </footer>
  );
}
