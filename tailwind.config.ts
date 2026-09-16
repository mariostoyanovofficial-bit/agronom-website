import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary agronomic greens
        'agro-dark': '#1a472a',      // Deep forest green
        'agro-primary': '#2d6a4f',   // Primary green
        'agro-light': '#40916c',     // Medium green
        'agro-lighter': '#52b788',   // Light green
        'agro-accent': '#95d5b2',    // Pale green
        
        // Earth tones
        'earth-dark': '#5a4a42',     // Dark brown
        'earth-main': '#8b7355',     // Main brown
        'earth-light': '#d4a574',    // Light brown
        'earth-pale': '#e8dcc8',     // Pale earth
        
        // Accent colors
        'soil': '#6b5444',           // Soil brown
        'leaf': '#90ee90',           // Leaf green
        'sky': '#87ceeb',            // Sky blue
        'sunny': '#ffd700',          // Golden yellow
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-agro': 'linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)',
        'gradient-earth': 'linear-gradient(135deg, #8b7355 0%, #d4a574 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #40916c 0%, #d4a574 100%)',
      },
      spacing: {
        'section': '5rem',
      },
    },
  },
  plugins: [],
};

export default config;
