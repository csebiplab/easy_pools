/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        },
      },
    },
  },
  plugins: [],
};
