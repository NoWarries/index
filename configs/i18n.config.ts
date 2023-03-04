// Config for @nuxtjs/i18n
// noinspection AllyPlainJsInspection
export default {
	detectBrowserLanguage: {
		useCookie: true,
		cookieKey: 'i18n_redirected',
		redirectOn: 'root',
	},
	defaultLocale: 'en',
	lazy: true,
	vueI18n: {
		fallbackLocale: 'en',
		formatFallbackMessages: true,
	},
	langDir: '/locales/',
	locales: [
		{
			code: 'en',
			flag: '🇬🇧',
			name: 'English',
			iso: 'en-US',
			file: 'en.json',
		},
		{
			code: 'nl',
			flag: '🇳🇱',
			name: 'Dutch',
			iso: 'nl-NL',
			file: 'nl.json',
		},
	],
};
