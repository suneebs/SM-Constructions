import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services"; // ✅ Import your Services page

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
