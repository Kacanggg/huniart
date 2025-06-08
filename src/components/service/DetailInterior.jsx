import React from "react";
import { ServicesItems } from "../../data/ServicesItems";

const DetailInterior = () => {
  const interiorItem = ServicesItems.find((item) => item.id === 1);
  return (
    <div className="bg-[#f9f5ef] text-[#3d2c1e] px-6 py-10 md:px-20 md:py-16 font-serif">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Desain Interior
      </h2>
      <p className="text-center text-lg mb-8">
        Kami menyediakan layanan desain interior untuk berbagai jenis properti
        dengan pendekatan estetika dan fungsional.
      </p>
      <div className="grid gap-8 items-center justify-center mb-8">
        {interiorItem && (
          <img
            src={interiorItem.image}
            alt={interiorItem.title}
            className="max-w-96 rounded-xl shadow mx-auto"
          />
        )}
      </div>
      <ul className="list-disc list-inside space-y-3 text-lg max-w-3xl mx-auto">
        <li>Desain rumah, apartemen, kantor, dan ritel</li>
        <li>Gambar kerja teknis & visualisasi 3D</li>
        <li>Tata letak furnitur, skema warna, pencahayaan, dan dekorasi</li>
        <li>Koordinasi dari konsep hingga instalasi</li>
        <li>Gratis konsultasi awal dan estimasi biaya</li>
      </ul>
      <div className="text-center mt-8">
        <button className="bg-[#3d2c1e] text-white px-6 py-3 rounded-full hover:bg-[#5a3f2b] transition">
          Konsultasi Gratis
        </button>
      </div>
    </div>
  );
};

export default DetailInterior;
