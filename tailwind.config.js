/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // keep if you actually use /src
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      keyframes: {
        lcpPulse: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(110%)" },
        },
        techScroll: {
          "0%": { transform: "translateX(0%)" },
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
