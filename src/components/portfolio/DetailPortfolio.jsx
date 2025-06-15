import React, { useState, useEffect } from "react";
import Button from "../button/ButtonLink";
import { useParams } from "react-router-dom";
import { PortfolioItems } from "../../data/PortfolioItem";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../Animation";
import { FaArrowLeft } from "react-icons/fa";

const DetailPortfolio = () => {
  const { link } = useParams();
  const project = PortfolioItems.find((item) => item.link.toString() === link);

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeImage]);

  if (!project) {
    return (
      <div className="p-12 text-center text-red-600 font-semibold">
        Portfolio tidak ditemukan.
      </div>
    );
  }

  return (
    <section className="py-16 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {project.images?.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-64 object-cover rounded-xl cursor-pointer"
              variants={fadeInUp}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt="Fullscreen"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 text-black text-3xl font-bold z-50"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
        <div className="mb-8 space-y-6">
          {project.videos && project.videos.length > 0 && (
            <div className="mb-8 space-y-6">
              {project.videos.map((videoUrl, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl overflow-hidden mb-6"
                  variants={fadeInUp}
                >
                  <video
                    src={videoUrl}
                    controls
                    className="w-full h-auto rounded-xl"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <motion.h1
          className="text-3xl font-bold text-[#5a4b41] mb-2"
          variants={fadeInUp}
        >
          {project.title}
        </motion.h1>
        <motion.p className="text-sm text-gray-600 mb-4" variants={fadeInUp}>
          {project.category}
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          variants={fadeInUp}
        >
          {project.details || project.description}
        </motion.p>
        <motion.div className="flex mb-8 space-x-2" variants={fadeInUp}>
          <Button
            text="Kembali"
            to="/portfolio"
            icon={<FaArrowLeft />}
            className="bg-dark hover:bg-hover-cta"
          />
          <Button
            text="Konsultasi"
            to="https://wa.me/6282111491259"
            className="bg-cta hover:bg-hover-dark"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DetailPortfolio;
