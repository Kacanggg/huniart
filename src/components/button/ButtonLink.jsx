import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ text = "Klik di sini", to = "/", icon }) => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to={to}
        className="inline-flex items-center px-6 py-3 bg-cta hover:bg-hover-dark text-white rounded-lg text-base font-medium transition duration-300"
      >
        {text}{icon && <span className="ml-2">{icon}</span>}
      </Link>
    </div>
  );
};

export default ButtonLink;
