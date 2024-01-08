import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        slider: 'linear-gradient(to top, #000 10%, transparent)',
        thumbnails: 'linear-gradient(to top, #000 2%, transparent)',
      },
      keyframes: {
        showContent: {
          to: {
            transform: 'translateY(0)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'show-content': 'showContent 0.5s 0.7s ease-in-out 1 forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
export default config;
