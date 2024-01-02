/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx.tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#080025",
        white: "#fefdf2",
        orange: "#f16a1f",
        darkBlue: "#155f91",
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
