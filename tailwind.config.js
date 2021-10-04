module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        sm: "0 2px 0 0 rgba(0, 0, 0, 0.02)",
      },
      fontFamily: {
        fira: "'Fira Sans', sans-serif",
        merwator: "'Merriweather', serif",
      },
      textColor: {
        pColor: "#131212",
      },
      backgroundColor: {
        bgsllides: "#ededef",
      },
      a: {
        color: "#000000",
      },
      margin: {
        mar: "530px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
