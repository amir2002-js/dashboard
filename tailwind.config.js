/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: "center",
      padding:{
        DEFAULT : "1rem",
        "sm":"1.5rem",
        "md":"1rem",
        "lg":"1.5rem",
        "xl":"4rem",
      },
    },
    extend: {
      maxWidth : {
        310:"1240px"
      },
      fontFamily:{
        "primary": "primary",
        "primary-bold": "primary-bold",
        "secondary": "secondary",
        "secondary-bold": "secondary-bold",
      },
      colors: {
        Primary: "#180161",
        Secondary: "#4F1787",
      }
    },
  },
  plugins: [],
}