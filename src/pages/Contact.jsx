import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import interiorBg from "../assets/img/bg.avif";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const slideIn = (direction) => {
  return {
    hidden: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {
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
    <div className="max-w-7xl mx-auto">
      <motion.img
        src={interiorBg}
        alt="Living room interior"
        className="w-full object-cover"
        height={400}
        width={1200}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      />

      <motion.section
        className="px-6 py-10 md:py-16 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-center"
          variants={fadeInUp}
          custom={0}
        >
          Hubungi Kami
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-center text-base md:text-lg mb-12 leading-relaxed"
          variants={fadeInUp}
          custom={1}
        >
          Kami senang mendengar dari Anda. Jika Anda memiliki pertanyaan, ingin
          berkonsultasi mengenai proyek interior Anda, atau membutuhkan
          informasi lebih lanjut, jangan ragu untuk menghubungi kami.
        </motion.p>

        <motion.div
          className="bg-[#FFFEF9] rounded-md p-6 md:p-10 flex flex-col md:flex-row md:space-x-96 max-w-7xl mx-auto"
          variants={fadeInUp}
          custom={2}
        >
          <motion.div className="flex-1 space-y-8 mb-4 md:mb-0">
            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              custom={3}
            >
              <FaMapMarkerAlt className="text-[#1B2A17] w-6 h-6 mt-1" />
              <div>
                <h2 className="text-xl font-serif font-semibold mb-1">
                  Alamat
                </h2>
                <p className="text-base leading-relaxed max-w-xs">
                  Jl. H. Juhaman No.128, RT.6/RW.8,
                  <br />
                  Lubang Buaya, Kec. Cipayung, Kota
                  <br />
                  Jakarta Timur, DKI Jakarta 13810,
                  <br />
                  Indonesia
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              custom={4}
            >
              <FaPhone className="text-[#1B2A17] w-6 h-6 mt-1" />
              <div>
                <h2 className="text-xl font-serif font-semibold mb-1">
                  Telepon
                </h2>
                <p className="text-base leading-relaxed max-w-xs">
                  +62 821 1149 1259
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              custom={5}
            >
              <FaEnvelope className="text-[#1B2A17] w-6 h-6 mt-1" />
              <div>
                <h2 className="text-xl font-serif font-semibold mb-1">Email</h2>
                <p className="text-base leading-relaxed max-w-xs">
                  huniart.interior@gmail.com
                </p>
              </div>
            </motion.div>
            <motion.div className="w-full mt-8" variants={fadeInUp} custom={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.775623965823!2d106.89517487507061!3d-6.293192061595008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2a659394fa1%3A0x6bd2b8022aad503b!2sJl.%20H.%20Juhaman%20No.128%2C%20RT.8%2FRW.6%2C%20Lubang%20Buaya%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013810!5e0!3m2!1sid!2sid!4v1747359876916!5m2!1sid!2sid"
                className="w-full md:w-70 h-60 md:h-70 border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
              ></iframe>
            </motion.div>
          </motion.div>
          <motion.form
            variants={slideIn("left")}
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
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
