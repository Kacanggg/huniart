import React, { useRef, useEffect, useState } from "react";
import Button from "../components/button/ButtonLink";
import interiorBg from "../assets/img/bg.avif";
import { PortfolioItems } from "../data/PortfolioItems";
import { FeaturesItems } from "../data/FeaturesItems";
import { ServicesItems } from "../data/ServicesItems";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
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

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] md:h-[720px] bg-cover bg-[top_20%] sm:bg-center bg-no-repeat text-white flex items-center justify-center md:bg-fixed bg-local"
        style={{
          backgroundImage: `url(${interiorBg})`,
          backgroundSize: window.innerWidth < 640 ? "contain" : "cover",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollY * 0.2}px)`,
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-opacity-40" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-2xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-heading mb-4"
          >
            Mewujudkan Interior Impian Anda
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base md:text-lg mb-6">
            Kami hadir untuk mendesain ruang yang nyaman, fungsional, dan penuh
            gaya.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button text="Hubungi Kami" href="https://wa.me/6282111491259" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 bg-navbar text-navbar relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-heading text-center mb-12 scroll-mt-20"
            id="keunggulan-kami"
          >
            Keunggulan Kami
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          >
            {FeaturesItems.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-navbar mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-navbar text-sm text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-heading mb-4">
              Layanan Kami
            </h2>
            <p className="text-navbar">
              Kami menyediakan layanan desain interior mulai dari konsultasi
              hingga eksekusi, memastikan setiap proyek dikerjakan dengan
              kualitas tinggi dan perhatian pada detail.
            </p>
          </motion.div>
          <div className="space-y-16">
            {ServicesItems.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  variants={slideIn(index % 2 !== 0 ? "right" : "left")}
                  className="w-full md:w-1/2"
                >
                  <img
                    src={interiorBg}
                    alt={service.title}
                    className="rounded-2xl shadow-md w-full h-72 object-cover"
                  />
                </motion.div>
                <motion.div
                  variants={slideIn(index % 2 !== 0 ? "left" : "right")}
                  className="w-full md:w-1/2"
                >
                  <div className="mb-4 flex justify-center md:justify-start">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-heading mb-2">
                    {service.title}
                  </h3>
                  <p className="text-navbar">{service.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Button text="Lihat Detail" href="/service" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 bg-footer relative"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-heading text-center mb-6"
          >
            Portfolio Terbaik Kami
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-footer mb-12 max-w-xl mx-auto"
          >
            Beberapa proyek interior terbaik yang telah kami selesaikan.
          </motion.p>
          <motion.div variants={scaleIn} className="relative">
            <div
              ref={prevRef}
              className="absolute top-1/2 left-2 md:-left-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-hover-dark hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-navbar" />
            </div>
            <div
              ref={nextRef}
              className="absolute top-1/2 right-2 md:-right-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-hover-dark hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-navbar" />
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {PortfolioItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="rounded-lg shadow-md overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-heading mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-navbar">{item.description}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Button text="Lihat Semua Portfolio" href="/portfolio" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="bg-white py-12 px-6 md:px-16"
      >
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="text-3xl font-bold text-heading mb-2">Kontak Kami</h2>
          <p className="text-navbar">
            Hubungi kami untuk konsultasi atau kerja sama proyek interior Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 justify-center items-center">
          <motion.div
            variants={slideIn("right")}
            className="space-y-4 text-navbar mx-auto"
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2"
            >
              <FaPhone className="text-heading-alt" />
              <span>+62 821 1149 1259</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2"
            >
              <FaEnvelope className="text-heading-alt" />
              <span>huniart.interior@gmail.com</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-2"
            >
              <FaMapMarkerAlt className="text-heading-alt mt-1" />
              <span>
                Jl. H. Juhaman No.128, RT.6/RW.8,
                <br />
                Lubang Buaya, Kec. Cipayung, Kota
                <br />
                Jakarta Timur, DKI Jakarta 13810,
                <br />
                Indonesia
              </span>
            </motion.div>

            <div className="flex gap-4 mt-2 text-xl text-heading-alt">
              <motion.a
                whileHover={{ y: -5, scale: 1.2 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </motion.a>
            </div>

            <motion.div variants={scaleIn} className="mt-2">
              <iframe
                title="Lokasi Kantor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.7218712390788!2d106.89765896364844!3d-6.293277746608071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2a659394fa1%3A0x6bd2b8022aad503b!2sJl.%20H.%20Juhaman%20No.128%2C%20RT.8%2FRW.6%2C%20Lubang%20Buaya%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013810!5e0!3m2!1sid!2sid!4v1747053850874!5m2!1sid!2sid"
                width="250"
                height="250"
                className="border rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.form
            variants={slideIn("left")}
            className="space-y-4 max-w-md w-full mx-auto"
          >
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
            />
            <textarea
              placeholder="Pesan Anda"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading-alt"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-cta text-cta py-2 px-6 rounded-lg hover:bg-hover-dark transition"
            >
              Kirim Pesan
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
