import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button/ButtonLink";
import { PortfolioItems } from "../data/PortfolioItem";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa";
import FilterCategory from "../components/FilterCategory";
import getFilteredItems from "../components/FilterHelpers";
import { fadeInUp } from "../components/Animation";

const Portfolio = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [category, setCategory] = useState("");

  const filteredItems = getFilteredItems(
    PortfolioItems,
    mainCategory,
    category
  );

  return (
    <section className="py-16 px-6 md:px-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="flex justify-center items-center gap-3 text-4xl font-semibold mb-4 text-[#5a4b41]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaFolderOpen className="bg-icon" /> Portfolio
        </motion.h2>

        <motion.p
          className="text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Jelajahi proyek desain interior dan arsitektur kami yang mencerminkan
          perpaduan estetika, fungsionalitas, dan kenyamanan.
        </motion.p>

        <FilterCategory
          items={PortfolioItems}
          mainCategory={mainCategory}
          setMainCategory={setMainCategory}
          category={category}
          setCategory={setCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mt-10">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.link}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-md transition"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5a4b41]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>{item.category}</strong>
                </p>
                <p className="text-heading text-sm line-clamp-3 mb-3">
                  {item.description}
                </p>
                <Button
                  text="Selengkapnya"
                  to={item.link}
                  icon={<FaArrowRight />}
                  iconPosition="right"
                  className="bg-cta hover:bg-hover-dark"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center text-gray-500 mt-10"
            viewport={{ once: true }}
          >
            Tidak ada proyek ditemukan.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
