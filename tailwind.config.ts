import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        theme: "var(--border)",
        primary: "var(--bg)",
        secondary: "var(--bg-secondary)",
        card: "var(--card-bg)",
        "bg-secondary": "var(--bg-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
