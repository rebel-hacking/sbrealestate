/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2455E8',      // Electric blue (Primary brand)
          blueHover: '#1B44BF',
          blueDark: '#123399',
          orange: '#FF7138',    // Tangerine orange (CTA & Highlights)
          orangeHover: '#E85B22',
          orangeLight: '#FFF0EA',
          navy: '#15234A',      // Midnight navy (Typography & Footer)
          navyMuted: '#3A4B75',
          navyLight: '#243463',
          ice: '#DCE6FF',       // Ice blue (Secondary backgrounds)
          iceLight: '#F3F7FF',
          ivory: '#FFF5ED',     // Warm ivory (Editorial sections)
          ivoryBorder: '#FFE6D3',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(21, 35, 74, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(36, 85, 232, 0.15)',
        'electric': '0 10px 25px -5px rgba(36, 85, 232, 0.35)',
        'orange-glow': '0 10px 25px -5px rgba(255, 113, 56, 0.35)',
      }
    },
  },
  plugins: [],
}

