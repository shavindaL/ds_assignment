/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-1": "#f6ffed",
        "green-2": "#d9f7be",
        "green-3": "#b7eb8f",
        "green-4": "#95de64",
        "green-5": "#73d13d",
        "green-6": "#52c41a",
        "green-7": "#389e0d",
        "green-8": "#237804",
        "green-9": "#135200",
        "green-10": "#092b00",
        'facebook': '#4267B2', // dineth login facebook
        'twit': '#1DA1F2', //dineth login twit
        'linkedin': '#0077b5' //dineth login linkedin
      },
      margin: {
        10: "10vw",
        20: "20vw",
        25: "25vw",
        30: "30vw",
        40: "40vw",
        50: "50vw",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      width: {
        "15vw": "15vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "50vw": "50vw",
        "80vw": "80vw",
        "95vw": "95vw",
        "210": "840px"

      },
      height: {
        "15vh": "15vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "50vh": "50vh",
        "95vh": "95vh",
      },
      screens: {
        "mobile-360": "360px",
        "mobile-720": "720px",
        "desktop-1440": "1440px",
        "desktop-1920": "1920px",
      }
    },
  },
  plugins: [[require("tw-elements/dist/plugin")]],
}