import React from "react";
import { ServicesItems } from "../data/ServicesItems";

const Service = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-earthy-primary mb-4">
          Layanan Kami
        </h2>
        <p className="text-earthy-dark mb-10 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan desain interior terbaik untuk
          mewujudkan ruang impian Anda. Setiap proyek kami tangani dengan
          dedikasi dan profesionalisme tinggi.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ServicesItems.map((service, index) => (
            <div
              key={index}
              className="bg-earthy-bg p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                {React.cloneElement(service.icon, {
                  className: "w-12 h-12 text-earthy-primary",
                })}
              </div>
              <h3 className="text-xl font-semibold text-earthy-primary">
                {service.title}
              </h3>
              <p className="text-earthy-dark text-sm text-center mt-2">
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
