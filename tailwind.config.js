/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    wrapper: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      tint_blue: "#1C1E53",
      royal_blue: "#2405F2",
      dark_blue: "#282938",
      yellow: "#FCD980",
      accent: "#EEF4FA",
      white: "#fff",
      black: "#2b2b2b",
      gray: "#F4F6FC",
      light_gray: "#F4F5F5",
      gray_dark: "#ADAEB3",
      text_grey:"#aaaaaf",
      cream: "#FCD980",
      darkmode_blue:"#1f314d",
      dark_mode_two:"#122037",
      dark_mode_card:"#2a3e5e",
      darkmode_text:"#ccd7e2",
      darkmode_text_green:"#3d6876",
    },
    extend: {
      fontfamily: {
        poppins: ["poppins"],
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 20px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
      },
     
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".perspective-1000": {
            perspective: "1000px",
          },
          ".preserve-3d": {
            transformStyle: "preserve-3d",
          },
          ".backface-hidden": {
            backfaceVisibility: "hidden",
          },
          ".rotate-y-180": {
            transform: "rotateY(180deg)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
