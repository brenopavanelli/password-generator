// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F2F2F2",
        dark: "#0D0D0D",
        grayCustom: "#595959",
        accent: "#F2DCB3",
        highlight: "#F2A81D",
      },
    },
  },
  plugins: [],
};
