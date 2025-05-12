import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Tentang Kami
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Huniart adalah studio desain interior yang berkomitmen menghadirkan
        ruang-ruang yang tidak hanya indah, tetapi juga fungsional dan
        mencerminkan kepribadian pemiliknya.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://source.unsplash.com/600x400/?interior,design"
            alt="Desain Interior"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-6 text-gray-700">
          <p>
            Sejak didirikan, kami telah menangani berbagai proyek mulai dari
            hunian pribadi, apartemen, hingga ruang komersial seperti kafe dan
            butik. Kami percaya bahwa setiap ruang memiliki cerita, dan tugas
            kami adalah membantumu mewujudkannya.
          </p>
          <p>
            Tim kami terdiri dari para desainer profesional, arsitek, dan
            pengrajin yang berdedikasi, bekerja sama dengan penuh kreativitas
            dan perhatian pada detail.
          </p>
          <p>
            Dengan pendekatan yang personal dan proses yang transparan, kami
            memastikan bahwa setiap klien merasa didengarkan dan puas dengan
            hasil akhir.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Misi Kami</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Menghadirkan desain interior yang terjangkau, berkelas, dan penuh
          makna bagi setiap orang. Kami ingin mengubah ruang menjadi tempat yang
          nyaman, menginspirasi, dan membawa kebahagiaan bagi penghuninya.
        </p>
      </div>
    </div>
  );
};

export default About;
