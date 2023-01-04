/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "p-dark-violet": "hsl(256, 26%, 20%)",
        "p-grayish-blue": "hsl(216, 30%, 68%)",
        "n-very-dark-violet": "hsl(270, 9%, 17%)",
        "n-dark-grayish-violet": "hsl(273, 4%, 51%)",
        "n-very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        "body-copy": "16px",
      },
      fontFamily: {
        header: ["DM Serif Display", "serif"],
        body: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        "mobile-nav-pattern": "url('/src/assets/bg-pattern-mobile-nav.svg')",
        "mobile-intro-left":
          "url('/src/assets/bg-pattern-intro-left-mobile.svg')",
      },
    },
  },
  plugins: [],
};
