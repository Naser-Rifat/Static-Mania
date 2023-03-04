/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#14142b",
        "off-white": "#f4f2ff",
        blue: "#503ae7",
        grey: "#afb0b9",
        green: "#1ad993",
      },
      fontFamily: { "see-more": "Inter" },
      borderRadius: { small: "27.5px", base: "32.59px" },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "48px",
    },
    screens: { md: { max: "960px" } },
  },
  corePlugins: { preflight: false },
};
