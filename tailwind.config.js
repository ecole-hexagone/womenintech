/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        carlson: ['"Carlson Script"', "cursive"],
        spartan: ["Spartan", "sans-serif"],
      },
      fontWeight: {
        spartan: {
          regular: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
          black: "900",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#C3C3E6",
          light: "#EDEDF7",
          dark: "#9A9AD5",
        },
        secondary: {
          DEFAULT: "#fe2e8e",
          light: "#FEAED4",
          dark: "#DE0269",
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "p, a": {
          fontFamily: "Spartan, sans-serif",
          fontWeight: "400",
        },
      });
    },
  ],
};
