/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          1: "#2C3A4B",
          2: "#394452",
          3: "#545D69",
          4: "#6D7580",
          5: "#858C94",
          6: "#A5ABB3",
          7: "#DADEE3",
          8: "#EBEEF2",
          9: "#F4F6F9",
        },
      },
    },
  },
  plugins: [],
};
