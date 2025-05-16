import React from "react";

const ButtonLink = ({ text = "Klik di sini", href = "#" }) => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="px-6 py-3 bg-cta text-cta hover:bg-hover-dark text-white rounded-lg text-base font-medium transition duration-300"
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonLink;
