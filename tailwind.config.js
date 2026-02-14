// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      animation: {
        shine: 'shine 3s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
      },
    },
  },
};