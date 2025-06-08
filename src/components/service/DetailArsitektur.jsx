import React from "react";
import { ServicesItems } from "../../data/ServicesItems";

const DetailArsitektur = () => {
  const arsitekturItem = ServicesItems.find((item) => item.id === 2);
  return (
    <div className="bg-[#f9f5ef] text-[#3d2c1e] px-6 py-10 md:px-20 md:py-16 font-serif">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Desain Arsitektur
      </h2>
      <p className="text-center text-lg mb-8">
        Layanan arsitektur kami mencakup desain bangunan dari awal hingga siap
        konstruksi.
      </p>
      <div className="grid gap-8 items-center justify-center mb-8">
        {arsitekturItem && (
          <img
            src={arsitekturItem.image}
            alt={arsitekturItem.title}
            className="max-w-96 rounded-xl shadow mx-auto"
          />
        )}
      </div>
      <ul className="list-disc list-inside space-y-3 text-lg max-w-3xl mx-auto mr-30">
        <li>Desain bangunan: rumah, ruko, villa, gedung komersial</li>
        <li>Gambar IMB lengkap: denah, tampak, potongan, dan utilitas</li>
        <li>3D modeling & rendering eksterior-interior</li>
        <li>Perencanaan struktur dan efisiensi energi</li>
        <li>Kolaborasi dengan tim konstruksi dan perizinan</li>
      </ul>
      <div className="text-center mt-8">
        <button className="bg-[#3d2c1e] text-white px-6 py-3 rounded-full hover:bg-[#5a3f2b] transition">
          Konsultasi Gratis
        </button>
      </div>
    </div>
  );
};

export default DetailArsitektur;
