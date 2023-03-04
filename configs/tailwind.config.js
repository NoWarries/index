/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/components/**/*.{js,vue,ts}',
		'./src/layouts/**/*.vue',
		'./src/pages/**/*.vue',
		'./src/plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0%',
					},
					'100%': {
						opacity: '100%',
					},
				},
				'fade-out': {
					'0%': {
						opacity: '100%',
					},
					'100%': {
						opacity: '0%',
					},
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-7deg)' },
					'50%': { transform: 'rotate(7deg)' },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out 10',
				wiggleThenFadeOut:
					'wiggle 1s ease-in-out 5, fade-out 1s ease 1 5s forwards',
			},
			colors: {
				'electric-violet': {
					DEFAULT: '#6E44FF',
					50: '#FCFCFF',
					100: '#EDE7FF',
					200: '#CDBEFF',
					300: '#AD96FF',
					400: '#8E6DFF',
					500: '#6E44FF',
					600: '#420CFF',
					700: '#2F00D3',
					800: '#23009B',
					900: '#160063',
				},
			},
		},
	},
	plugins: [],
};
