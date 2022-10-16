const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "cursor-blink 1s linear infinite alternate",
      },
      keyframes: {
        "cursor-blink": {
          "100%": {
            opacity: 0,
          },
        },
      },
      fontFamily: {
        raleway: ['"Raleway", sans-serif'],
        roboto: ['"Roboto Mono", sans-serif'],
      },
      colors: {
        base: {
          gruv: "#0d0d0d",
          argo: "#001626",
          hypr: "#000000",
        },
        primary: colors.orange,
      },
    },
  },
  safelist: [
    {
      pattern: /base-(gruv|argo|hypr)/,
    },
    {
      pattern: /(bg|text|border)-(orange|emerald|red)-(300|400)/,
      variants: ["hover"],
    },
  ],
  plugins: [require("tailwind-scrollbar")],
};
