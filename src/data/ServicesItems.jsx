import {
  FaCouch,
  FaDraftingCompass,
  FaMapMarkerAlt,
  FaPalette,
  FaHammer,
  FaBuilding,
  FaRegClipboard,
  FaRulerCombined,
  FaHardHat,
  FaRegCheckCircle,
} from "react-icons/fa";
import interior from "../assets/img/Project-Interior-Kitchenset,Serpong-Tangerang.JPG";
import arsitektur from "../assets/img/Project-Arsitektur-Kelapa-Gading,Jakarta-Utara.jpeg";

export const ServicesItems = [
  {
    id: 1,
    title: "Desain Interior",
    icon: <FaCouch className="text-3xl text-brown-700" />,
    image: interior,
    link: "/service/desain-interior",
    description:
      "Mewujudkan desain interior yang estetis dan fungsional sesuai dengan kebutuhan dan gaya hidup Anda.",
    details: [
      {
        title: "Konsultasi dan Survei Lokasi Gratis",
        desc: "Kami datang langsung untuk memahami kebutuhan dan karakter ruang.",
        icon: <FaMapMarkerAlt className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Desain Konsep & Moodboard",
        desc: "Visualisasi awal dengan warna, tekstur, dan gaya desain.",
        icon: <FaPalette className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "2D Layout & 3D Render",
        desc: "Gambar denah dan tampilan realistis sebelum pembangunan.",
        icon: <FaDraftingCompass className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Eksekusi & Supervisi Lapangan",
        desc: "Kami bekerja sama dengan kontraktor dan pengrajin profesional.",
        icon: <FaHammer className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Pemilihan Furnitur & Aksesori",
        desc: "Kurasi furnitur, pencahayaan, dan detail interior lainnya.",
        icon: <FaCouch className="text-3xl text-brown-700 bg-icon" />,
      },
    ],
  },
  {
    id: 2,
    title: "Desain Arsitektur",
    icon: <FaDraftingCompass className="text-3xl text-brown-700" />,
    image: arsitektur,
    link: "/service/desain-arsitektur",
    description:
      "Perencanaan desain arsitektur bangunan dengan pendekatan profesional dan amanah.",
    details: [
      {
        title: "Konsultasi & Analisa Kebutuhan",
        desc: "Kami mendengarkan dan memahami fungsi serta visi bangunan Anda.",
        icon: <FaRegClipboard className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Desain Konsep & Denah Arsitektur",
        desc: "Pengembangan ide desain, zonasi ruang, dan hubungan antar ruang.",
        icon: <FaBuilding className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Gambar Kerja Teknis",
        desc: "Detail teknis seperti struktur, plumbing, dan elektrikal.",
        icon: <FaRulerCombined className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Koordinasi Pelaksanaan Proyek",
        desc: "Pendampingan dan supervisi selama proses pembangunan.",
        icon: <FaHardHat className="text-3xl text-brown-700 bg-icon" />,
      },
      {
        title: "Kesesuaian Peraturan & Perizinan",
        desc: "Desain sesuai regulasi dan siap digunakan untuk pengurusan IMB/PBG.",
        icon: <FaRegCheckCircle className="text-3xl text-brown-700 bg-icon" />,
      },
    ],
  },
];
