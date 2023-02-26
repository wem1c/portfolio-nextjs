module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#fdf6e3",
      },
    },
    variants: {
      extend: {},
      display: ["responsive", "group-hover", "group-focus"],
    },

    plugins: [],
  },
};
