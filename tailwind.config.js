/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        muted: {
          foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--color-border) / <alpha-value>)",
        input: "hsl(var(--color-input) / <alpha-value>)",
        white: "hsl(var(--color-white) / <alpha-value>)",
        card: "hsl(var(--color-card) / <alpha-value>)",
      },
      backgroundImage: {
        radio: "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)",
      },
      boxShadow: {
        card: "",
      },
    },
  },
  plugins: [],
};
