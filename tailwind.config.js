/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-bg": "#E6E9F2",
      "secondary-bg": "#EFF0F5",
    },
    screens: {
      mobile: { max: "414px" },
    },
    spacing: {
      0: "0px",
      8: "8px",
      9: "9px",
      26: "26px",
      66: "66px",
    },
    maxWidth: {
      414: "414px",
    },
    boxShadow: {
      card: "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);",
    },fontFamily: {
      proximaNova:['ProximaNova']
      
    },
    extend: {},
  },
  plugins: [],
};
