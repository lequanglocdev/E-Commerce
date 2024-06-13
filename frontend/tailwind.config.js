/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        main: "1220px",
      },
      backgroundColor: {
        main: "#ee3131",
      },
      colors: {
        main: "#ee3131",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            "-webkit-transform": "translateY(40px)",
            transform: "translateY(40px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
          },
        },
        "slide-input": {
          "0%": {
            "-webkit-transform": "translateY(4px)",
            transform: "translateY(4px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
          },
        },
      },
      animation:{
        "slide-top":"slide-top 0.5s cubic-bezier(0.250,0.46,0.45,0.940)both",
        "slide-input":"slide-top 0.5s cubic-bezier(0.250,0.46,0.45,0.940)both"
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
