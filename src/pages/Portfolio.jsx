import React from "react";
import { PortfolioItems } from "../data/PortfolioItems";

const Portfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Portfolio Kami
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Berikut adalah beberapa proyek interior yang telah kami selesaikan
          untuk klien-klien kami.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PortfolioItems.map((item, index) => (
            <div
              key={index}
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
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
