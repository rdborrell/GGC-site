/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Soft, muted backgrounds (eggshell/beige)
        cream: '#F5F1E8',
        lightCream: '#FAF7F0',
        warmWhite: '#F9F6F1',
        eggshell: '#F0EDE5',
        // Primary - warm gold/amber tones with subtle variations
        primary: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#F5B800',
          600: '#CC9900',
          700: '#997300',
          800: '#664D00',
          900: '#332600',
          DEFAULT: '#F5B800',
        },
        // Secondary gold tones for subtle gradients
        gold: {
          50: '#FFFBF0',
          100: '#FFF6E0',
          200: '#FFEDC2',
          300: '#FFE4A3',
          400: '#FFDB85',
          500: '#FFD166',
          600: '#F5C14D',
          700: '#E0A838',
          800: '#C08825',
          900: '#9A6B18',
        },
        text: {
          primary: '#2C2C2C',
          secondary: '#5A5A5A',
          light: '#8A8A8A',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
