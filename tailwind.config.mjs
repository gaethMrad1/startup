/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "gray-dark": "rgb(30 35 46 / 80%)",
        "gray-light": "#f0f2f9",
        "dark": "#1d2430",
        "blue-color": "#4a6cf7",
        "primary-color": "#4a6cf71a",
        "body-color": "#121723",
        "input-light-color": "#f8f8f8",
        "input-dark-color": "#2C303B",
        "title-color": "#121723",
        "paragraph-color": "#788293",
        "white-color": "rgb(255 255 255 / 0.8)",
      },
    },
  },
  plugins: [],
};
