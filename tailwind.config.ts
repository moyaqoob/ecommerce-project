import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown:{
          50:"#79899d",//description
          100:"#6a7380",//gray color of the heading
          200:"#394050",//heading of new tab
          500:"#404140",//main section
          600:"#262726"//navbar color
        }
      },
      
    },
  },
  plugins: [],
} satisfies Config;
