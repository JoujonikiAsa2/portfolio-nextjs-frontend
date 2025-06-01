import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-x-32': {
          transform: 'rotateX(32deg)',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}

export default config
