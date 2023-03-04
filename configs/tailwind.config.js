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
