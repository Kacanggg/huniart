import React from "react";
import Button from "../button/ButtonLink";
import { ServicesItems } from "../../data/ServicesItem";
import { motion } from "framer-motion";
import { fadeInUp } from "../Animation";
import gallery1 from "../../assets/img/Project-Interior-Alumunium-Kitchenset.JPG";
import gallery2 from "../../assets/img/Project-Interior-Alumunium-Kitchenset-2.jpeg";
import gallery3 from "../../assets/img/Project-Interior-Alumunium-Kitchenset-3.jpeg";

const DetailInterior = () => {
  const interiorItem = ServicesItems.find((item) => item.id === 1);
  const gallery = [gallery1, gallery2, gallery3];

  return (
    <div className="bg-white text-gray-800">
      <motion.section
        className="relative bg-center bg-cover bg-no-repeat h-[400px] md:h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${interiorItem.image})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Desain Interior Eksklusif
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto">
            Rancang ruang yang mencerminkan karakter dan kenyamanan Anda.
          </p>
        </div>
      </motion.section>
      <motion.section
        className="py-16 container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-10">
          Layanan yang Kami Tawarkan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interiorItem?.details?.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="bg-gray-100 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-10">Galeri Proyek</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gallery.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`Galeri ${idx + 1}`}
                className="rounded-xl shadow-md object-cover h-64 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.7 }}
              />
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Siap memulai desain interior impian Anda?
        </h2>
        <Button
          text="Konsultasi"
          to="https://wa.me/6282111491259"
          className="bg-cta hover:bg-hover-dark"
        />
      </motion.section>
    </div>
  );
};

export default DetailInterior;
