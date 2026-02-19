/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: {
        navy: "#0B1C3D",
        dark: "#08142B",
        blue: "#2563EB",
        glow: "#38BDF8",
        teal: "#14B8A6",
      },
    },
  },
},
  plugins: [],
}
