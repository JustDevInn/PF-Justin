module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'outline': '0 0 3px #000000',
      },
      colors: {
        'award-orange': '#d64b27',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      teko: ['Teko', 'sans-serif'],
      berk: ['Berkshire Swash', 'serif'],
      rozha: 'Rozha One',
      playfair: 'Playfair Display',
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
};
