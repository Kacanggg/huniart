import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Huniart</h2>
          <p className="text-gray-400">
            Solusi digital terbaik untuk kebutuhan bisnis Anda. Kami siap
            membantu Anda berkembang.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-white">
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/web-development" className="hover:text-white">
                Huniart Interior
              </Link>
            </li>
            <li>
              <Link to="/mobile-app" className="hover:text-white">
                Huniart Architect
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              📍 Jl. H. Juhaman No.128, RT.6/RW.8, Lubang Buaya, Kec. Cipayung,
              Kota Jakarta Timur, Daerah Khusus
              <br />
              Ibukota Jakarta 13810, Indonesia
            </li>
            <li>📞 +62 821 1149 1259</li>
            <li>✉️ huniart.interior@gmail.com</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
//       <div className="grid md:grid-cols-3 gap-10 mb-8">
//         {/* Logo & Deskripsi */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-2">InteriorKita</h2>
//           <p className="text-sm text-gray-400">
//             Menyulap ruang menjadi tempat yang lebih fungsional dan estetik.
//             Konsultasikan desain interior impian Anda bersama kami.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Beranda
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Tentang Kami
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Layanan
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Portofolio
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Kontak
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">
//             Hubungi Kami
//           </h3>
//           <ul className="text-sm space-y-2">
//             <li>📍 Jl. Kemang Raya No. 123, Jakarta</li>
//             <li>📞 +62 812 3456 7890</li>
//             <li>📧 info@interiorkita.com</li>
//           </ul>
//           <div className="flex gap-4 mt-4 text-xl text-gray-300">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white"
//             >
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} InteriorKita. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
