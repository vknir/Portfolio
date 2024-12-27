import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "wave-1": "url(../assets/wavesOpacity.svg)",
        "wave-2": "url(../assets/wave.svg)",

      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-25%)" },
        },
        waveR: {
         "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(25%)" },
          "50%": { transform: "translateX(50%)" },
          "75%": { transform: "translateX(25%)" },
        },
      },

      animation: {
        wavey: "wave 30s linear infinite",
        "wavey-r": "waveR 25s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
