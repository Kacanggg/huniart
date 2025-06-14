import React from "react";
import interiorBg from "../assets/img/Project-Interior-Arsitektur-6.jpeg";
import { fadeInUp } from "../components/Animation";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="bg-white text-[#3a3a3a] px-6 py-12 md:px-20 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-4 text-[#5a4b41]"
          variants={fadeInUp}
          custom={0}
        >
          Tentang Kami
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed mb-8"
          variants={fadeInUp}
          custom={1}
        >
          Kami adalah perusahaan desain arsitektur dan interior yang
          menghadirkan solusi kreatif untuk menciptakan ruang yang fungsional,
          estetis, dan nyaman. Dengan pendekatan personal, kami melayani klien
          dari berbagai sektor, mulai dari rumah tinggal hingga ruang komersial.
        </motion.p>
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={fadeInUp}
          custom={2}
        >
          <motion.div variants={fadeInUp} custom={3}>
            <div className="flex items-center gap-2 mb-2">
              <FaEye className="text-[#4e594f]" size={22} />
              <h2 className="text-2xl font-semibold text-[#4e594f]">Visi</h2>
            </div>
            <p>
              Menjadi penyedia layanan desain dan bangun di bidang arsitektur
              dan interior terpercaya yang menghadirkan nilai estetika dan
              kenyamanan di setiap ruang.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} custom={4}>
            <div className="flex items-center gap-2 mb-2">
              <FaBullseye className="text-[#4e594f]" size={22} />
              <h2 className="text-2xl font-semibold text-[#4e594f]">Misi</h2>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Memberikan solusi desain kreatif dan fungsional</li>
              <li>Menjaga kualitas material dan pengerjaan</li>
              <li>Menjalin hubungan profesional dengan klien</li>
              <li>Mengerjakan proyek tepat waktu dan transparan</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div className="mb-12" variants={fadeInUp} custom={5}>
          <img
            src={interiorBg}
            alt="Interior design showcase"
            className="rounded-xl w-full shadow-md"
          />
        </motion.div>
        <motion.div
          className="bg-[#eae4dc] rounded-2xl p-6 text-center shadow-sm"
          variants={fadeInUp}
          custom={6}
        >
          <p className="text-xl italic text-[#5a4b41]">
            "Setiap ruang memiliki cerita – kami membantu Anda menuliskannya."
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
