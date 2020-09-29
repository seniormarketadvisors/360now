module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "black",
        '360darkteal': '#2F4D52',
        '360lightteal': '#50ABA3',
        black: "#333333",
      },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
};
