/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    // font-family: 'Kanit', sans-serif;
    // font-family: 'Rubik', sans-serif;
    // font-family: 'Josefin Sans', sans-serif;
    // font-family: 'Josefin Slab', serif;
    // font-family: 'Space Grotesk', sans-serif;
    // font-family: 'Space Mono', monospace;
    // font-family: 'Righteous', cursive;
    // font-family: 'Patua One', cursive;
    // font-family: 'Titan One', cursive;
    // font-family: 'Kalam', cursive;

    fontFamily: {
      'kanit': ["Kanit", "sans-serif"],
      'rubik': ["Rubik", "sans-serif"],
      'josefin-sans': ["Josefin Sans", "sans-serif"],
      'josefin-slab': ["Josefin Slab", "serif"],
      'space-grotesk': ["Space Grotesk", "sans-serif"],
      'space-mono': ["Space Mono", "monospace"],
      'righteous': ["Righteous", "cursive"],
      'patua-one': ["Patua One", "cursive"],
      'titan-one': ["Titan One", "cursive"],
      'kalam': ["Kalam", "cursive"],
      'tilt-prism': ["Tilt Prism", "cursive"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}