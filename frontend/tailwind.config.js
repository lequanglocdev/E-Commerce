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
        overlay:'rgba(0,0,0,0.7)'
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
        "slide-right":{
          "0%": {
            "-webkit-transform": "translateX(-1000px);",
                    transform: "translateX(-1000px);"
          },
          "100%": {
            "-webkit-transform": "translateX(0px);",
                    transform: "translateX(0px);"
          }
        }, 
        "slide-left":{
          "0%": {
            "-webkit-transform": "translateX(0px);",
                    transform: "translateX(0px);"
          },
          "100%": {
            "-webkit-transform": "translateX(-1000px);",
                    transform: "translateX(-1000px);"
          }
        }
      },
      animation:{
        "slide-top":"slide-top 0.5s cubic-bezier(0.250,0.46,0.45,0.940)both",
        "slide-input":"slide-top 0.5s cubic-bezier(0.250,0.46,0.45,0.940)both",
        "slide-right":"slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-left": "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
