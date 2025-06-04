// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // tuỳ đường dẫn dự án của Tâm
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};
