import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Logo" className="w-30 h-14 mb-5" />
          <p className="text-footer">
            Solusi desain interior terbaik untuk kebutuhan Anda. Kami siap
            membantu Anda menciptakan ruang yang indah dan fungsional.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-footer-alt">
            Navigasi
          </h3>
          <ul className="space-y-2 text-footer">
            <li>
              <Link to="/" className="hover:text-heading transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-heading transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-heading transition-colors"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-heading transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-heading transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-footer-alt">
            Services
          </h3>
          <ul className="space-y-2 text-footer">
            <li>
              <Link
                to="/service"
                className="hover:text-heading transition-colors"
              >
                Huniart Interior
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-heading transition-colors"
              >
                Huniart Architect
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-footer-alt">
            Contact
          </h3>
          <ul className="text-footer space-y-4">
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1 text-footer-alt text-6xl md:text-7xl" />
              <span>
                Jl. H. Juhaman No.128, RT.6/RW.8, Lubang Buaya, Kec. Cipayung,
                Kota Jakarta Timur, DKI Jakarta 13810, Indonesia
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-footer-alt text-xl md:text-xl" />
              <span>+62 821 1149 1259</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-footer-alt text-xl md:text-xl" />
              <span>huniart.interior@gmail.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/p/Huniart-100083909311435/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer hover:text-heading-alt transition-colors"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/huniart.interior/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer hover:text-heading-alt transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/adi-herlambang-82aa8865?originalSubdomain=id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer hover:text-heading-alt transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-alt/30 mt-10 pt-6 text-center text-footer/80 text-sm">
        &copy; {new Date().getFullYear()} Huniart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
