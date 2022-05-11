module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/bg.png')",
        'footer-texture': "url('./src/assets/images/bg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          gradient: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%);",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}