import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        res: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
        res4x4: 'repeat(2, minmax(min(100%, 20rem), 1fr))',
        shop: '13rem 1fr'
      },
      boxShadow: {
        search: '0px 0px 8px rgb(74, 114, 245) '
      }
    }
  },
  plugins: []
}
export default config
