module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "50px": "50px",
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "500px": "500px",
        "1000px": "1000px",
        "2000px": "2000px",
        "3000px": "3000px",
        "5000px": "5000px",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
