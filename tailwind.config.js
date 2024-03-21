/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // => beshi choto screen mobile 639-280px
      // => moddhom screen mobile 767-640px
      'xs': '280px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      // => tablet screen 1023px-768px

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // => mid level desktop screen 1279-1024px

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // => Extra desktop screen 1439px-1280px

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }

      // 2(dui gun extra screen) ==> 1535px-1440px

      '3xl': '1536px',

      '4xl': '1736px',

      '5xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#188B89",
          50: "#188B89",
          100: "#188B89",
          200: "#188B89",
          300: "#188B89",
          400: "#188B89",
          500: "#188B89",
          600: "#188B89",
          700: "#188B89",
        },
        secondary: {
          DEFAULT: "#049E43",
          50: "#049E43",
        },
        info: {
          DEFAULT: "#33475B",
          50: "#89A3BD",
        },
        success: {
          DEFAULT: "#33475B",
          50: "#89A3BD",
        },
        warning: {
          DEFAULT: "#FAD04F",
          50: "#FAD04F",
        },
        danger: {
          DEFAULT: "#DC0000",
        },
        dark: {
          DEFAULT: "#000000",
          50: "#D9D9D980",
          100: "#484848",
          200: "#434343",
          300: "#535455",
          400: "#333333",
        },
      },
    },
  },
  plugins: [],
};
