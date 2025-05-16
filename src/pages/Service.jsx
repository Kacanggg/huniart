import React from "react";
import { ServicesItems } from "../data/ServicesItems";
import Button from "../components/button/ButtonLink";
import { fadeInUp } from "../components/animation/Animation";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#fdfaf4] py-16 px-6 md:px-16 text-[#3b3b3b] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="flex justify-center items-center gap-3 text-4xl font-semibold text-amber-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaTools className="text-amber-700" /> Layanan Kami
        </motion.h2>
        <motion.p
          className="text-lg text-amber-800 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Kami menyediakan solusi lengkap desain dan konstruksi interior yang
          menyatu dengan estetika alami dan kenyamanan ruang.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-4xl mx-auto text-left">
          {ServicesItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-10 border-l-4 border-amber-600"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-amber-800">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button text="Hubungi Kami" href="https://wa.me/6282111491259" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
