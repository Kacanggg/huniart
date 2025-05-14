import React from "react";
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

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto">
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
          className="bg-[#FFFEF9] rounded-md p-6 md:p-10 flex flex-col md:flex-row md:space-x-20 max-w-4xl mx-auto"
          variants={fadeInUp}
          custom={2}
        >
          <motion.div className="flex-1 space-y-8 mb-10 md:mb-0">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126908.47602440404!2d106.7806424!3d-6.2087635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699194b9e49b61%3A0x82f0359d5a2999a8!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1678982892613!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
              ></iframe>
            </motion.div>
          </motion.div>
          <motion.form
            className="flex-1 space-y-6"
            method="POST"
            action="#"
            noValidate
            variants={fadeInUp}
            custom={7}
          >
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Formulir Kontak
            </h2>
            {[
              {
                id: "nama",
                label: "Nama Lengkap",
                type: "text",
                placeholder: "Isikan Nama Anda",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "Isikan Email Anda",
              },
            ].map((field, index) => (
              <motion.div key={field.id} variants={fadeInUp} custom={8 + index}>
                <label
                  htmlFor={field.id}
                  className="block mb-1 text-base font-normal"
                >
                  {field.label}
                </label>
                <input
                  className="w-full rounded border border-[#E9E2D0] bg-[#FFFEF9] px-3 py-2 text-[#1B2A17] placeholder-[#A69F8C] focus:outline-none focus:ring-2 focus:ring-[#1B2A17]"
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </motion.div>
            ))}
            <motion.div variants={fadeInUp} custom={10}>
              <label
                htmlFor="subjek"
                className="block mb-1 text-base font-normal"
              >
                Subjek
              </label>
              <select
                className="w-full rounded border border-[#E9E2D0] bg-[#FFFEF9] px-3 py-2 text-[#1B2A17] focus:outline-none focus:ring-2 focus:ring-[#1B2A17]"
                id="subjek"
                name="subjek"
                defaultValue=""
              >
                <option disabled value="">
                  Pilih Subjek
                </option>
                <option value="konsultasi">Konsultasi Proyek</option>
                <option value="penawaran">Permintaan Penawaran</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </motion.div>
            <motion.div variants={fadeInUp} custom={11}>
              <label
                htmlFor="pesan"
                className="block mb-1 text-base font-normal"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="5"
                placeholder="Tuliskan pesan Anda di sini"
                className="w-full rounded border border-[#E9E2D0] bg-[#FFFEF9] px-3 py-2 text-[#1B2A17] placeholder-[#A69F8C] focus:outline-none focus:ring-2 focus:ring-[#1B2A17]"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-[#1B2A17] text-[#FFFEF9] px-6 py-2 rounded hover:bg-[#32452b] transition-colors duration-200"
              variants={fadeInUp}
              custom={12}
            >
              Kirim Pesan
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
