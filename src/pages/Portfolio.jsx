import React from "react";
import Button from "../components/button/ButtonLink";
import { PortfolioItems } from "../data/portfolioItems";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../components/animation/Animation";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="py-16 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={fadeInUp}
        >
          <FaFolderOpen className="bg-icon text-3xl" />
          <h2 className="text-4xl font-semibold text-[#5a4b41]">
            Portfolio Kami
          </h2>
        </motion.div>

        <motion.p className="text-lg text-heading mb-12" variants={fadeInUp}>
          Jelajahi proyek-proyek desain arsitektur dan interior unggulan kami
          yang menggabungkan estetika natural, fungsionalitas, dan kenyamanan
          dalam setiap ruang. Setiap karya mencerminkan perhatian pada detail
          dan karakter unik klien kami.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PortfolioItems.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 bg-icon"
              variants={fadeInUp}
              custom={index}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold bg-icon mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-heading mb-2">
                    {project.category}
                  </p>
                  <p className="text-heading">{project.description}</p>
                </div>
                <Button
                  text="Selengkapnya"
                  to={project.link}
                  icon={<FaArrowRight />}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Button text="Hubungi Kami" to="https://wa.me/6282111491259" />
      </motion.div>
    </section>
  );
};

export default Portfolio;
