// https://v3.nuxtjs.org/api/configuration/nuxt.config
import i18nConfig from './configs/i18n.config';

export default defineNuxtConfig({
	// Defines the directory to serve the client from
	srcDir: 'src/',
	// Import default css
	css: ['~/assets/css/common.scss'],
	// Import modules and corresponding configration
	modules: [
		['@nuxtjs/color-mode', { classSuffix: '' }],
		['@nuxtjs/i18n', i18nConfig],
	],
	// App meta data
	app: {
		head: {
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			noscript: [
				// <noscript>JavaScript is required</noscript>
				{ children: 'JavaScript is required' },
			],
		},
	},
	// Runtime config
	runtimeConfig: {
		SpotifyAuth: '',
	},
	// Config for postcss
	postcss: {
		plugins: {
			tailwindcss: {
				config: './configs/tailwind.config.js',
			},
			autoprefixer: {},
		},
	},
});
