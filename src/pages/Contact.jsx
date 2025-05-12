import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Hubungi Kami
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Kami siap membantu Anda mewujudkan desain interior impian.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info Kontak */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhone className="text-indigo-600 text-xl" />
            <span className="text-gray-700">+62 821 1149 1259</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <span className="text-gray-700">huniart.interior@gmail.com</span>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
            <span className="text-gray-700">
              Jl. H. Juhaman No.128, RT.6/RW.8, Lubang Buaya, Kec. Cipayung,
              Jakarta Timur, DKI Jakarta 13810, Indonesia
            </span>
          </div>
          <a
            href="https://wa.me/6282111491259"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
          >
            Chat via WhatsApp
          </a>
        </div>

        {/* Form Kontak */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pesan
            </label>
            <textarea
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              rows="5"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
