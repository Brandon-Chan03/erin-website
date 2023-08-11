/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background.svg')",
        'hero-pattern': "url('/hero-pattern.jpg')",
        'test-background': "url('/test.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#F7A2A1",
        secondary: "#FABB6B",
        tertiary: "#FBC851",
        heroGradientStart: "#4F4647",
        heroGradientEnd: "#75706C",
        background: "#D6D6D6"
      }
    },
    screens: {
      'smallPhone': '350px',
      'sm': '640px',
      'md': '768px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }
  },
  plugins: [],
}
