import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          600: '#4f46e5',
          700: '#4338ca',
        },
        secondary: {
          900: '#1e293b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
