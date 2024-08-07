import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './src/**/*',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      mainPurple: '#5E44DD',
      mainPink: '#E2148E',
      black: '#222222',
      black900: '#26282C',
      black800: '#333436',
      black700: '#383B40',
      black600: '#484E59',
      black500: '#626273',
      black400: '#8C949E',
      black300: '#BDC0C8',
      black200: '#D7D9DA',
      black100: '#F3F3F3',
      white: '#FFFFFF',
      fontcolor01: '#222222',
      fontcolor02: '#404040',
      fontcolor03: '#575757',
      'primary-font-color': '#575757',
      disablePurple: '#BFB4F1',
      warnColor: '#F22828',
    },

    fontFamily: {
      sansNeoBold: ['SpoqaHanSansNeo-Bold', 'sans-serif'],
      sansNeoMedium: ['SpoqaHanSansNeo-Medium', 'sans-serif'],
      SansNeoRegular: ['SpoqaHanSansNeo-Regular', 'sans-serif'],
    },

    extend: {
      backgroundImage: {
        'login-bg': "url('/login/bgtemp.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
