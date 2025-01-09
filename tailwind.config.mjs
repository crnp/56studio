/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      display: ['Squada One', 'system-ui', 'sans-serif'],
      body: ['Voces', 'system-ui', 'sans-serif'],
    },
    colors: {
      studio: {
        primary: {
          DEFAULT: '#b91d25',
          light: '#db2730',
          dark: '#7e1e23',
        },
        red: '#ff0000',
        dark: '#14151a',
        darker: '#101010',
        white: {
          DEFAULT: '#f0f0f0',
          darker: '#c8c8c8',
        },
      },
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
