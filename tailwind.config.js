/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Native wind classes.
  content: ["./app/**/*",
    "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#030014',
        secondary: '#151321',
        light: {
          100: '#221f3d',
          200: '#A8B5DB',
          300: '#0CA4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23'
        },
        accent: '#AB88FF'
      }
    },
  },
  plugins: [],
}