import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({
  text = "Klik di sini",
  to = "/",
  icon,
  iconPosition = "left",
  className = "",
}) => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to={to}
        className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-3xl text-base font-medium transition duration-300 ${className}`}
      >
        {iconPosition === "left" && icon}
        <span>{text}</span>
        {iconPosition === "right" && icon}
      </Link>
    </div>
  );
};

export default ButtonLink;
