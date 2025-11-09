/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // brand palette pulled/approximated from LOGO.svg
        brand: {
          DEFAULT: "#0f6fff", // primary blue
          red: "#ff4b4b",
          yellow: "#ffcc00",
          dark: "#0f1724",
          muted: "#6b7280",
        },
      },
    },
  },
  plugins: [],
};
