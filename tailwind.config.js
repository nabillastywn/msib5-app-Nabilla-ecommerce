/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#C5E5FD",
        secondary: "#02233B",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      padding: {
        35: "1.95rem", // You can adjust the value as needed
      },
    },
  },
  plugins: [],
};
