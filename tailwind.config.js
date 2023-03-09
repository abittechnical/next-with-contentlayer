const defaultTheme = require('tailwindcss/defaultTheme')
const { radixToTailwind } = require('./lib/radixToTailwind')
const {
  olive,
  oliveDark,
  lime,
  limeDark,
  skyDark,
  sky,
  amber,
  amberDark,
  grass,
  grassDark,
  red,
  redDark,
} = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: radixToTailwind(olive),
        neutralDark: radixToTailwind(oliveDark),
        primary: radixToTailwind(lime),
        primaryDark: radixToTailwind(limeDark),
        info: radixToTailwind(sky),
        infoDark: radixToTailwind(skyDark),
        warning: radixToTailwind(amber),
        warningDark: radixToTailwind(amberDark),
        success: radixToTailwind(grass),
        successDark: radixToTailwind(grassDark),
        danger: radixToTailwind(red),
        dangerDark: radixToTailwind(redDark),
      },

      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
