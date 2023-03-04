module.exports = {
	// Plugins
	plugins: [require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: false,

	// prettier-plugin-tailwindcss
	tailwindConfig: './configs/tailwind.config.js',

	// Rules
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'consistent',
	bracketSameLine: false,
	endOfLine: 'lf',
};
