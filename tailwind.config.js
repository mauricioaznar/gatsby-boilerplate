const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require('tailwindcss'), require('autoprefixer')],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      violet: colors.violet
    },
    fontFamily: {
      sans: ['"Glory"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['"Cinzel Decorative"'],
      mono: ['"Dancing Script"'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}