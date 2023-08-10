/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
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
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#5421aa",
                   
          "secondary": "#0069cc",
                   
          "accent": "#f922b1",
                   
          "neutral": "#231f28",
                   
          "base-100": "#000328",
                   
          "info": "#00a2e4",
                   
          "success": "#2cba6c",
                   
          "warning": "#f5d166",
                   
          "error": "#f54d85",
            },
      
      }
    ],
    
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}