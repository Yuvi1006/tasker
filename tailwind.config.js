// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4D9DE0',  // Add a custom color, example light blue
        customGreen: '#A4D58A', // Add a custom green color
      },
    },
  },
  plugins: [],
}
