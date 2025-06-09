import React from "react";
import { ServicesItems } from "../data/ServicesItems";
import Button from "../components/button/ButtonLink";
import { fadeInUp } from "../components/animation/Animation";
import { motion } from "framer-motion";
import { FaTools, FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-16 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="flex justify-center items-center gap-3 text-4xl font-semibold mb-4 text-[#5a4b41]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaTools className="bg-icon" /> Layanan Kami
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Kami menyediakan solusi lengkap desain arsitektur dan interior yang
          menyatu dengan estetika alami dan kenyamanan ruang.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-5xl mx-auto text-left">
          {ServicesItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition border border-gray-200 bg-icon"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-t-xl w-full h-56 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#5a4b41]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-heading">{service.description}</p>
                <Button
                  text="Selengkapnya"
                  to={service.link}
                  icon={<FaArrowRight />}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
