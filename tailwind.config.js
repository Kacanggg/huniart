// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#FAF3E0",
        "navbar-text": "#3C3C3C",
        heading: "#C1A57B",
        "heading-alt": "#A3B18A",
        cta: "#DDB892",
        "cta-text": "#FFFFFF",
        footer: "#C1A57B",
        "footer-text": "#FAF3E0",
        "footer-text-alt": "#FFFFFF",
        "hover-dark": "#A38E6A",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
