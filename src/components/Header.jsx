import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-navbar text-navbar" : "bg-navbar text-navbar"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-1 flex justify-between items-center py-2 md:py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <nav className="hidden md:flex space-x-8 lg:space-x-16 text-lg">
          <Link to="/" className="hover:text-heading-alt transition-colors">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-heading-alt transition-colors"
          >
            About
          </Link>
          <Link
            to="/service"
            className="hover:text-heading-alt transition-colors"
          >
            Service
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-heading-alt transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="hover:text-heading-alt transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-navbar px-4 pb-4">
          <div className="max-w-screen-xl mx-auto">
            <nav className="flex flex-col space-y-2 text-lg mt-2">
              <Link
                to="/"
                className="hover:text-heading-alt transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-heading-alt transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/service"
                className="hover:text-heading-alt transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-heading-alt transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="hover:text-heading-alt transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
