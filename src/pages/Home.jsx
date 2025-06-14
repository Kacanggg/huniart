import React, { useRef, useEffect, useState } from "react";
import Button from "../components/button/ButtonLink";
import interiorBg from "../assets/img/Project-Interior-Arsitektur-3.jpeg";
import ContactForm from "../components/ContactForm";
import { PortfolioItems } from "../data/PortfolioItem";
import { FeaturesItems } from "../data/FeaturesItem";
import { ServicesItems } from "../data/ServicesItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideIn,
  staggerContainer,
  scaleIn,
} from "../components/Animation";
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

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[360px] sm:h-[480px] md:h-[640px] lg:h-[720px] text-white flex items-center justify-center overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${interiorBg})`,
            filter: "brightness(0.7)",
            zIndex: 0,
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-2xl pb-5"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-2xl md:text-5xl font-extrabold"
          >
            MEWUJUDKAN ARSITEKTUR DAN INTERIOR IMPIAN ANDA
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm md:text-lg -mb-6">
            Kami hadir untuk mendesain ruang yang nyaman, fungsional, dan penuh
            gaya.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button text="Hubungi Kami" to="https://wa.me/6282111491259" className="bg-cta hover:bg-hover-dark" />
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
              Kami menyediakan layanan desain arsitektur dan interior mulai dari
              konsultasi hingga eksekusi, memastikan setiap proyek dikerjakan
              dengan kualitas tinggi dan perhatian pada detail.
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
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-md w-full h-72 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  variants={slideIn(index % 2 !== 0 ? "left" : "right")}
                  className="w-full md:w-1/2"
                >
                  <div className="mb-4 flex justify-center md:justify-start bg-icon">
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
            <Button text="Lihat Detail" to="/service" className="bg-cta hover:bg-hover-dark" />
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
            Beberapa proyek desain arsitektur dan interior terbaik yang telah
            kami selesaikan.
          </motion.p>
          <motion.div variants={scaleIn} className="relative">
            <div
              ref={prevRef}
              className="hidden md:flex absolute top-1/2 left-2 md:-left-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-hover-dark hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-navbar" />
            </div>
            <div
              ref={nextRef}
              className="hidden md:flex absolute top-1/2 right-2 md:-right-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-hover-dark hover:text-white transition"
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
                      <p className="text-sm text-navbar line-clamp-1">{item.description}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Button text="Lihat Portfolio" to="/portfolio" className="bg-cta hover:bg-hover-dark" />
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
            Hubungi kami untuk konsultasi atau kerja sama proyek desain
            arsitektur dan interior Anda.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 place-items-center">
          <ContactForm />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
