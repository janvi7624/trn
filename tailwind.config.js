/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        trn: {
          bg: '#000000',
          surface: '#0a0a0a',
          card: '#0f0f0f',
          border: '#1a1a1a',
          red: '#E50914',
          'red-dark': '#b00710',
          'red-light': '#ff4d4d',
          text: '#ffffff',
          'text-secondary': '#cccccc',
          'text-muted': '#999999',
        },
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(229, 9, 20, 0.4)',
        'red-glow-lg': '0 0 30px rgba(229, 9, 20, 0.6)',
        'red-inner': 'inset 0 0 15px rgba(229, 9, 20, 0.15)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(229, 9, 20, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 9, 20, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(229, 9, 20, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
