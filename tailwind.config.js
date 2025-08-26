/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: { brand: { red: "#F44336" } },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
}