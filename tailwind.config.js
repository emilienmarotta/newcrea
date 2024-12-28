/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mins: "300px",
        xs: "550px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        ncDarkBlue: "#091021",
        ncPurple: "#6338e4",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "::selection": {
          backgroundColor: "#6338e4",
          color: "#ddd6fe",
        },
      });
    },
  ],
};
