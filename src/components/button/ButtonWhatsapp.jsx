import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const ButtonWa = ({
  phoneNumber = "6282111491259",
  message = "Halo, saya ingin konsultasi tentang desain interior",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-64 mb-2"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <img
                  src="/path-to-your-logo.png"
                  alt="Logo"
                  className="w-6 h-6 mr-2"
                />
                Huniart
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Ada yang bisa kami bantu? Konsultasikan kebutuhan interior Anda
              sekarang!
            </p>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-full py-2 rounded-lg text-center block font-medium hover:bg-green-600 transition"
            >
              Mulai Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <FaWhatsapp className="text-white text-2xl z-10" />
      </motion.button>
    </div>
  );
};

export default ButtonWa;
