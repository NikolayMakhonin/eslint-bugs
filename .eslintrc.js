module.exports = {
	env: {
		es6 : true,
	},
	
	rules: {
		'no-undef': 'error',
	},

	parser       : '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion                : '2020',
		sourceType                 : 'module',
		allowImportExportEverywhere: false,
		codeFrame                  : true,
		project                    : './tsconfig.eslint.json',
	},

	plugins: [
		'@typescript-eslint',
	],
}
