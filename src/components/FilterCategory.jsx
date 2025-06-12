import React from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "./Animation";

const FilterCategory = ({
  items,
  mainCategory,
  setMainCategory,
  category,
  setCategory,
}) => {
  const uniqueMainCategories = [
    ...new Set(items.map((item) => item.mainCategory)),
  ];

  const allSubCategories = items
    .filter((item) => item.mainCategory === mainCategory)
    .map((item) => item.category);
  const uniqueCategories = [...new Set(allSubCategories)];

  return (
    <div className="mb-6">
      <motion.div
        className="flex flex-wrap gap-2 justify-center mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => {
            setMainCategory("");
            setCategory("");
          }}
          className={`px-4 py-2 rounded-full border transition-all duration-200 ease-in-out transform hover:scale-105 ${
            mainCategory === "" ? "bg-cta text-white" : "bg-icon text-gray-700"
          }`}
          variants={buttonVariants}
          custom={-1}
        >
          Semua
        </motion.button>
        {uniqueMainCategories.map((cat, i) => (
          <motion.button
            key={cat}
            onClick={() => {
              setMainCategory(cat);
              setCategory("");
            }}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ease-in-out transform hover:scale-105 ${
              mainCategory === cat
                ? "bg-cta text-white"
                : "bg-icon text-gray-700"
            }`}
            variants={buttonVariants}
            custom={i}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>
      {mainCategory && uniqueCategories.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setCategory("")}
            className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ease-in-out transform hover:scale-105 ${
              category === ""
                ? "bg-cta text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            variants={buttonVariants}
            custom={-1}
          >
            Semua
          </motion.button>
          {uniqueCategories.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ease-in-out transform hover:scale-105 ${
                category === cat
                  ? "bg-cta text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              variants={buttonVariants}
              custom={i}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FilterCategory;
