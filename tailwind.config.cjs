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
        "mobile-intro-left-pattern":
          "url('/src/assets/bg-pattern-intro-left-mobile.svg')",
        "mobile-intro-right-pattern":
          "url('/src/assets/bg-pattern-intro-right-mobile.svg')",
        "mobile-how-we-work-bg-pattern":
          "url('/src/assets/bg-pattern-how-we-work-mobile.svg')",
        "mobile-footer-bg-pattern":
          "url('/src/assets/bg-pattern-footer-mobile.svg')",
        "desktop-how-we-work-bg-pattern":
          "url('/src/assets/bg-pattern-how-we-work-desktop.svg')",
      },
    },
  },
  plugins: [],
};
