const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const icons = require('@jcamp/tailwindcss-plugin-icons')
const animate = require('@jcamp/tailwindcss-plugin-animate')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [forms, typography, icons({ scale: 1.2 }), animate],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    './formkit.config.ts',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b-70': 'linear-gradient(to bottom, var(--tw-gradient-stops) 70%)',
      },
      fontFamily: {
        sans: [
          'DM Sans',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'DM Serif Display',
          ...defaultTheme.fontFamily.serif,
        ],
        mono: [
          'DM Mono',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        'blazor-blue': '#052767',
        'blazor-indigo': '#3a0647',
        teal: colors.teal,
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
}
