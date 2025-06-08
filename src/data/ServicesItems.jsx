import { FaCouch, FaDraftingCompass } from "react-icons/fa";
import interior from "../assets/img/Project-Interior-Kitchenset,Serpong-Tangerang.JPG";
import arsitektur from "../assets/img/Project-Arsitektur-Kelapa-Gading,Jakarta-Utara.jpeg";

export const ServicesItems = [
  {
    id: 1,
    title: "Desain Interior",
    icon: <FaCouch className="text-3xl text-brown-700" />,
    image: interior,
    link: "/service/desain-interior",
    description: "Mewujudkan desain interior yang estetis dan fungsional sesuai dengan kebutuhan dan gaya hidup Anda."
  },
  {
    id: 2,
    title: "Desain Arsitektur",
    icon: <FaDraftingCompass className="text-3xl text-brown-700" />,
    image: arsitektur,
    link: "/service/desain-arsitektur",
    description: "Perencanaan desain arsitektur bangunan dengan pendekatan profesional dan amanah."
  },
];
