import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import DetailInterior from "./components/service/DetailInterior";
import DetailArsitektur from "./components/service/DetailArsitektur";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ButtonWhatsapp from "./components/button/ButtonWhatsapp";
import ScrollToTop from "./components/ScrollToTop";
import DetailPortfolio from "./components/portfolio/DetailPortfolio";

function App() {
  useEffect(() => {
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
    document.head.appendChild(viewportMeta);

    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route
              path="/service/desain-interior"
              element={<DetailInterior />}
            />
            <Route
              path="/service/desain-arsitektur"
              element={<DetailArsitektur />}
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:link" element={<DetailPortfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ButtonWhatsapp
          phoneNumber="6282111491259"
          message="Halo, saya ingin konsultasi tentang desain interior"
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;