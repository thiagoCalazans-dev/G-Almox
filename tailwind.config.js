module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#ccddff",
          300: "#6699ff",
          500: "#0055ff",
          700: "#003399",
          900: "#001133",
        },
        contrast: {
          100: "#ffc180",
          300: "#ff9c33",
          500: "#cc6900",
          700: "#994f00",
          900: "#663500",
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
plugins: [
  require('@tailwindcss/forms'),
],
}