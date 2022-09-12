/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Serif", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
