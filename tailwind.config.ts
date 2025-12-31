import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1F44',
          50: '#1a3a6e',
          100: '#163157',
          200: '#122847',
          300: '#0e1f38',
          400: '#0c1a2f',
          500: '#0A1F44',
          600: '#081933',
          700: '#061322',
          800: '#040c11',
          900: '#020609',
        },
        secondary: {
          DEFAULT: '#F05A28',
          50: '#fef3ee',
          100: '#fce4d9',
          200: '#f9c5b2',
          300: '#f59f80',
          400: '#f27a4d',
          500: '#F05A28',
          600: '#e14316',
          700: '#bb3412',
          800: '#952c16',
          900: '#782815',
        },
        accent: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
