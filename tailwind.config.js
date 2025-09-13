/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        lcpPulse: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(110%)" },
        },
        techScroll: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        lcpPulse: "lcpPulse 1.6s ease-in-out infinite",
        techScroll: "techScroll 18s linear infinite",
      },
    },
  },
  plugins: [],
};
