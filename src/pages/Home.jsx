// import React, { useRef } from "react";
// import Button from "../components/button/ButtonLink";
// import interiorBg from "../assets/img/bg.avif";
// import { PortfolioItems } from "../data/PortfolioItems";
// import { FeaturesItems } from "../data/FeaturesItems";
// import { ServicesItems } from "../data/ServicesItems";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const bgImage = {
//   backgroundImage: `url(${interiorBg})`,
//   backgroundSize: window.innerWidth < 640 ? "contain" : "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// };

// const Home = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   return (
//     <div>
//       <section
//         className="relative h-[300px] md:h-[720px] bg-cover bg-[top_20%] sm:bg-center bg-no-repeat text-white flex items-center justify-center bg-local md:bg-fixed"
//         style={bgImage}
//       >
//         <div className="absolute inset-0 bg-opacity-40" />
//         <div className="relative z-10 text-center px-4 max-w-2xl">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">Huniart</h1>
//           <p className="text-base md:text-lg mb-6">
//             Kami hadir untuk mewujudkan impian desain interior Anda.
//           </p>
//           <Button text="Hubungi Kami" href="https://wa.me/6282111491259" />
//         </div>
//       </section>
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Keunggulan Kami
//           </h2>
//           <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//             {FeaturesItems.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
//               >
//                 <div className="mb-4 flex justify-center">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm text-center">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-16 bg-white">
//         <div className="animate-fadeInUp max-w-6xl mx-auto px-4">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Layanan Kami
//             </h2>
//             <p className="text-gray-600">
//               Kami menyediakan berbagai layanan desain interior terbaik untuk
//               mewujudkan ruang impian Anda. Setiap proyek kami tangani dengan
//               dedikasi dan profesionalisme tinggi.
//             </p>
//           </div>
//           <div className="space-y-16">
//             {ServicesItems.map((service, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 ${
//                   index % 2 !== 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 <div className="w-full md:w-1/2">
//                   <img
//                     src={interiorBg}
//                     alt={service.title}
//                     className="rounded-2xl shadow-md w-full h-72 object-cover"
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <div className="mb-4 flex justify-center md:justify-start">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-12 text-center">
//             <Button text="Lihat Detail" href="/service" />
//           </div>
//         </div>
//       </section>
//       <section className="py-16 bg-gray-50 relative">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Portfolio Terbaik Kami
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
//             Beberapa proyek interior terbaik yang telah kami selesaikan.
//           </p>
//           <div className="relative">
//             <div
//               ref={prevRef}
//               className="absolute top-1/2 left-2 md:-left-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
//             >
//               <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
//             </div>
//             <div
//               ref={nextRef}
//               className="absolute top-1/2 right-2 md:-right-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
//             >
//               <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
//             </div>
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               spaceBetween={24}
//               slidesPerView={1}
//               loop={true}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               navigation={{
//                 prevEl: prevRef.current,
//                 nextEl: nextRef.current,
//               }}
//               onInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//                 swiper.navigation.init();
//                 swiper.navigation.update();
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {PortfolioItems.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-600">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//           <div className="text-center mt-8">
//             <Button text="Lihat Semua Portfolio" href="/portfolio" />
//           </div>
//         </div>
//       </section>
//       <section className="bg-white py-12 px-6 md:px-16">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Kontak Kami</h2>
//           <p className="text-gray-600">
//             Hubungi kami untuk konsultasi atau kerja sama proyek interior Anda.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10">
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Nama Anda"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               placeholder="Email Anda"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <textarea
//               placeholder="Pesan Anda"
//               rows="5"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
//             >
//               Kirim Pesan
//             </button>
//           </form>

//           <div className="space-y-6 text-gray-700">
//             <div className="flex items-center gap-3">
//               <FaPhone className="text-blue-600" />
//               <span>+62 812 3456 7890</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FaEnvelope className="text-blue-600" />
//               <span>info@interiorkita.com</span>
//             </div>
//             <div className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-blue-600 mt-1" />
//               <span>Jl. Kemang Raya No. 123, Jakarta Selatan</span>
//             </div>

//             <div className="flex gap-5 mt-4 text-xl text-blue-600">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer">
//                 <FaFacebook />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                 <FaInstagram />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//                 <FaLinkedin />
//               </a>
//             </div>

//             <div className="mt-6">
//               <iframe
//                 title="Lokasi Kantor"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0368332330793!2d106.82261111559202!3d-6.260718895466982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17d6a4cbd4f%3A0x8c2bb6c8e68a6375!2sKemang%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1628791345671!5m2!1sid!2sid"
//                 width="100%"
//                 height="250"
//                 className="border rounded-lg"
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-12 bg-white">
//         <div className="mx-auto px-4 md:px-20">
//           <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//               alt="React"
//               className="h-12"
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
//               alt="Tailwind CSS"
//               className="h-10"
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
//               alt="Express.js"
//               className="h-10"
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mysql_logo.svg"
//               alt="MySQL"
//               className="h-10"
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
//               alt="Node.js"
//               className="h-10"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

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
        className="relative h-[300px] md:h-[720px] bg-cover bg-[top_20%] sm:bg-center bg-no-repeat text-white flex items-center justify-center bg-local md:bg-fixed"
        style={{
          backgroundImage: `url(${interiorBg})`,
          backgroundSize: window.innerWidth < 640 ? "contain" : "cover",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollY * 0.2}px)`,
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
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Huniart
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base md:text-lg mb-6">
            Kami hadir untuk mewujudkan impian desain interior Anda.
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
        className="py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
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
                <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600">
              Kami menyediakan berbagai layanan desain interior terbaik untuk
              mewujudkan ruang impian Anda. Setiap proyek kami tangani dengan
              dedikasi dan profesionalisme tinggi.
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
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
        className="py-16 bg-gray-50 relative"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Portfolio Terbaik Kami
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
          >
            Beberapa proyek interior terbaik yang telah kami selesaikan.
          </motion.p>
          <motion.div variants={scaleIn} className="relative">
            <div
              ref={prevRef}
              className="absolute top-1/2 left-2 md:-left-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
            </div>
            <div
              ref={nextRef}
              className="absolute top-1/2 right-2 md:-right-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
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
                    className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Kontak Kami</h2>
          <p className="text-gray-600">
            Hubungi kami untuk konsultasi atau kerja sama proyek interior Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 justify-center items-center">
          <motion.div
            variants={slideIn("right")}
            className="space-y-4 text-gray-700 mx-auto"
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2"
            >
              <FaPhone className="text-blue-600" />
              <span>+62 812 3456 7890</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2"
            >
              <FaEnvelope className="text-blue-600" />
              <span>info@interiorkita.com</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-2"
            >
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <span>Jl. Kemang Raya No. 123, Jakarta Selatan</span>
            </motion.div>

            <div className="flex gap-4 mt-2 text-xl text-blue-600">
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
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Pesan Anda"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
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
