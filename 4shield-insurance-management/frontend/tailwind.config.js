/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ssm: "368px",

      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1440px"
    },
    extend: {
      backgroundImage: {
        "bg-login": "url('/src/assets/images/background.png')"
      },
      boxShadow: {
        "2xl": "0px 10px 30px 0px rgba(13,12,13,0.2)"
      }
    }
  },
  plugins: []
}
