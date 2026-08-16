/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0B09",
          900: "#0F100D",
          800: "#151611",
          700: "#1D1E18",
          600: "#2A2B23",
        },
        paper: {
          100: "#F3F1E9",
          200: "#EDEAE1",
          300: "#C9C6BA",
          400: "#8F8D82",
          500: "#65645B",
        },
        brass: {
          DEFAULT: "#C68A3E",
          light: "#E0AC63",
          dim: "#7A5A34",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.2 } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        blink: "blink 1.6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
}
