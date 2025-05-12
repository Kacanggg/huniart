import React from "react";
import { ServicesItems } from "../data/ServicesItems";

const Service = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan desain interior terbaik untuk
          mewujudkan ruang impian Anda. Setiap proyek kami tangani dengan
          dedikasi dan profesionalisme tinggi.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ServicesItems.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
