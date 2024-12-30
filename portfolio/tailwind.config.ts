import { transform } from "next/dist/build/swc/generated-native";
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
        "wave-1": "url(../assets/svg/wavesOpacity.svg)",
        "wave-2": "url(../assets/svg/wave.svg)",

      },
      keyframes: {
        slideUp:{
          '0%':{ opacity: '0', transform : 'translate(0,2rem)'}
        },
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
        blink:{
          '0%':{opacity:'100'},
          '100%':{opacity:'0 ', }
        },
        fade:{
          '0%':{opacity: '0'},
          '100%':{opacity:'.8'}
        }
      },

      animation: {
        wavey: "wave 30s linear infinite",
        "wavey-r": "waveR 20s linear infinite",
        'custom-ping':"blink 1.2s steps(2,end) infinite",
        'slide-up':'slideUp 1s linear ',
        fade:'fade .8s ease'
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
