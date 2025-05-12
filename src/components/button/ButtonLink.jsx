import React from "react";

const ButtonLink = ({ text = "Klik di sini", href = "#" }) => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href={href}
        rel="noopener noreferrer"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-300"
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonLink;
