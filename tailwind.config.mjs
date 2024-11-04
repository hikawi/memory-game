/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "#FDA214",
        "light-gray-blue": "#BCCED9",
        "medium-gray": "#304859",
        "dark-gray": "#152938",
        "gray-white": "#F2F2F2",
        "gray-blue": "#7191A5",
        blue: "#6395B8",
        "almost-white": "#FCFCFC",
      },
      fontFamily: {
        "atkinson-hyperlegible": ["Atkinson Hyperlegible", "sans-serif"],
        "kosugi-maru": ["Kosugi Maru", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
