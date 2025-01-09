/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
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
      screens: {
        'true-hover': { raw: '(hover: hover)' },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        progress: 'progress 1.5s infinite linear',
        'fade-out': 'fade-out 0.5s forwards',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        progress: {
          '0%': { transform: ' translateX(0) scaleX(0)' },
          '20%': { transform: ' translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.4)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' },
        },
        'fade-out': {
          '100%': {
            opacity: 0,
            display: 'none',
          },
        },
      },
      transformOrigin: {
        'left-right': '0% 50%',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('true-hover', '@media (hover: hover)');
    },
  ],
};
