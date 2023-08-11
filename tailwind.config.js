/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/**/*.tsx'], // Agrega aquí las rutas a tus archivos fuente
  content: ['./**/*.tsx'], 
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4E00",
        },
        dark: {
          DEFAULT: "#999999",
          1000: "#2b2b2b",
        },
      },
      height: {
        "screen-calc": "calc(100vh - 116px)",
      },
    },
  },
  plugins: [],
};
