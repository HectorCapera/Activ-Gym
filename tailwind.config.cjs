/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["BebasNeue", "sans-serif"],
        body: ["RobotoCondensed-Regular", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
