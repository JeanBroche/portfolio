import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'night-sky-primary': '#0B0C1A',
      },
    },
  },
  plugins: [],
};

export default config;
