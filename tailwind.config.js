/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    screens: {
      'xs': '280px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '1736px',
      '5xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#188B89",
          50: "#E6F3F2",  // Lightest variant
          100: "#C0E1E0",
          200: "#99D0CE",
          300: "#73BEBC",
          400: "#4CACAA",
          500: "#188B89",  // Default
          600: "#00787A",  // Darker variant for better contrast
          700: "#006564",
        },
        secondary: {
          DEFAULT: "#049E43",
          50: "#E2F4E9",  // Lightest variant
          100: "#BFE8CE",
          200: "#9ADCB2",
          300: "#74D096",
          400: "#4FC47B",
          500: "#049E43",  // Default
          600: "#038B3A",  // Darker variant for better contrast
          700: "#027632",
          800: "#06602C",
          900: "#064721",
        },
        info: {
          DEFAULT: "#33475B",
          50: "#E5EAF0",  // Lightest variant
          100: "#BCC6D3",
          200: "#94A1B6",
          300: "#6B7C99",
          400: "#42577D",
          500: "#33475B",  // Default
          600: "#2A3A4A",  // Darker variant for better contrast
          700: "#1E2938",
        },
        success: {
          DEFAULT: "#33475B",
          50: "#E5EAF0",  // Lightest variant
          100: "#BCC6D3",
          200: "#94A1B6",
          300: "#6B7C99",
          400: "#42577D",
          500: "#33475B",  // Default
          600: "#2A3A4A",  // Darker variant for better contrast
          700: "#1E2938",
        },
        warning: {
          DEFAULT: "#FAD04F",
          50: "#FFF6E1",  // Lightest variant
          100: "#FFECB3",
          200: "#FFE184",
          300: "#FFD655",
          400: "#FCCC29",
          500: "#FAD04F",  // Default
          600: "#E0B647",  // Darker variant for better contrast
          700: "#C69C3F",
        },
        danger: {
          DEFAULT: "#DC0000",
          50: "#FFE1E1",  // Lightest variant
          100: "#FFB3B3",
          200: "#FF8585",
          300: "#FF5656",
          400: "#FF2929",
          500: "#DC0000",  // Default
          600: "#B20000",  // Darker variant for better contrast
          700: "#8A0000",
        },
        dark: {
          DEFAULT: "#000000",
          50: "#D9D9D9",
          100: "#B3B3B3",
          200: "#8C8C8C",
          300: "#666666",
          400: "#484848",
          500: "#000000",  // Default
          600: "#000000",  // Darker variant (Same as default)
          700: "#000000",
        },
        gray: {
          100: "#F5F5F5",  // Lightest gray
          200: "#E0E0E0",  // Light gray
          300: "#BDBDBD",  // Mid gray
          400: "#9E9E9E",  // Medium dark gray
          500: "#7E7E7E",  // Dark gray
          600: "#616161",  // Darker gray
          700: "#424242",  // Even darker gray
          800: "#303030",  // Very dark gray
          900: "#212121",  // Darkest gray
          'opacity-50': "#D9D9D980",  // Gray with 50% opacity
        }
      },
    },
  },
  plugins: [],
});
