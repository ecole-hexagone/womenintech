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
          DEFAULT: "#310046",
          dark: "#1D0029",
          light:"#64008F",
        },
        secondary: {
          DEFAULT: "#FFD200",
          dark: "#dbb300",
          light: "#FFE570",
        },
        tertiary: {
          DEFAULT: "#746693",
          light:"#A89FBC",
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
