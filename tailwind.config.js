// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#701E1F",     // ĐỎ RƯỢU – CHUẨN SNAPIFYE
        accent: "#F9DCC5",      // cam đào hover
        surface: "#FAF2DB",
        text: "#F9DCC5",        // trắng
        darktext: "#333333",    // đen khi scroll
      },
    },
  },
  plugins: [],
};