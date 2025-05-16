import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ text = "Klik di sini", to = "/" }) => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to={to}
        className="px-6 py-3 bg-cta hover:bg-hover-dark text-white rounded-lg text-base font-medium transition duration-300"
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;
