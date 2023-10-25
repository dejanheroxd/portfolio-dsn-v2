/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dennisDark: "#1C1D20",
        dennisBlue: {
          100: "#455CE9",
          200: "#334BD3",
        },
        dennisGray: "#999D9E",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
