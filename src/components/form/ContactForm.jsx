import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { slideIn } from "../animation/Animation";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r2f4szm",
        "template_16skyc7",
        e.target,
        "f27ukZXgS8V50oOR8"
      )
      .then(
        () => {
          setStatus("Pesan berhasil dikirim!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Gagal mengirim pesan.");
        }
      );
  };

  return (
    <motion.form
      variants={slideIn("left")}
      initial="hidden"
      animate="visible"
      className="space-y-4 w-full max-w-md"
      onSubmit={sendEmail}
    >
      <h2 className="text-2xl font-serif font-semibold mb-4">
        Formulir Kontak
      </h2>

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Nama Anda
      </label>
      <input
        type="text"
        name="nama"
        placeholder="Nama Anda"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email Anda
      </label>
      <input
        type="email"
        name="email"
        placeholder="Email Anda"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Subjek Anda
      </label>
      <input
        type="text"
        name="subjek"
        placeholder="Subjek Anda"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Pesan Anda
      </label>
      <textarea
        name="pesan"
        placeholder="Pesan Anda"
        rows="5"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
        required
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        type="submit"
        className="bg-cta text-cta py-2 px-6 rounded-lg hover:bg-hover-dark transition w-full"
      >
        Kirim Pesan
      </motion.button>

      {status && (
        <div
          className={`mt-4 text-sm p-3 rounded ${
            status.includes("berhasil")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;
