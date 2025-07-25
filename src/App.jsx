import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CostEstimator from "./pages/CostEstimator";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cost-estimation" element={<CostEstimator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
