/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bahama-blue': {
          '50': '#f2f9fd',
          '100': '#e4f0fa',
          '200': '#c2e1f5',
          '300': '#8dcaec',
          '400': '#50b0e0',
          '500': '#2996ce',
          '600': '#1a77af',
          '700': '#176291',
          '800': '#175175',
          '900': '#184562',
          '950': '#102b41',
        },

      }


    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],

    },

  },
  plugins: [],
}
