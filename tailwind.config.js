/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "presets/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itc: ['"ITC Avant Garde Gothic Pro"', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "10px": "10px",
      },
      colors: {
        primary: "rgb(var(--primary))",
        "primary-inverse": "rgb(var(--primary-inverse))",
        "primary-hover": "rgb(var(--primary-hover))",
        "primary-active-color": "rgb(var(--primary-active-color))",
        "primary-highlight":
          "rgb(var(--primary)/var(--primary-highlight-opacity))",
        "primary-highlight-inverse": "rgb(var(--primary-highlight-inverse))",
        "primary-highlight-hover":
          "rgb(var(--primary)/var(--primary-highlight-hover-opacity))",
        "primary-50": "rgb(var(--primary-50))",
        "primary-100": "rgb(var(--primary-100))",
        "primary-200": "rgb(var(--primary-200))",
        "primary-300": "rgb(var(--primary-300))",
        "primary-400": "rgb(var(--primary-400))",
        "primary-500": "rgb(var(--primary-500))",
        "primary-600": "rgb(var(--primary-600))",
        "primary-700": "rgb(var(--primary-700))",
        "primary-800": "rgb(var(--primary-800))",
        "primary-900": "rgb(var(--primary-900))",
        "primary-950": "rgb(var(--primary-950))",
        "surface-0": "rgb(var(--surface-0))",
        "surface-50": "rgb(var(--surface-50))",
        "surface-100": "rgb(var(--surface-100))",
        "surface-200": "rgb(var(--surface-200))",
        "surface-300": "rgb(var(--surface-300))",
        "surface-400": "rgb(var(--surface-400))",
        "surface-500": "rgb(var(--surface-500))",
        "surface-600": "rgb(var(--surface-600))",
        "surface-700": "rgb(var(--surface-700))",
        "surface-800": "rgb(var(--surface-800))",
        "surface-900": "rgb(var(--surface-900))",
        "surface-950": "rgb(var(--surface-950))",
        "current-text": "#313131",
        red: "#D90000",
        green: "#22C55E",
        orange: "#F57212",
        "black-vapo": "#0E0E0E",
        "anthracite-grey": "#464644",
        "light-grey": "#C8C8C7",
        "border-grey": "#939393",
      },
      backgroundImage: {
        filterBorder:
          "linear-gradient(180deg, rgba(225, 225, 225, 0) 17.5%, #E1E1E1 100%)",
      },
      boxShadow: {
        productCard: "0px 4px 9px 0px #00000033",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "scale-up": "scaleUp 1s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
