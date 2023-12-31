module.exports = {
	plugins: [
		'@typescript-eslint',
		'import',
		'sonarjs',
		'unicorn',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
	],
	rules: {
		// Base ESLint rules
		'curly': 'error',
		'sort-imports': 'error',
		quotes: ['error', 'single', { avoidEscape: true }],

		// TypeScript-related rules
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-import-type-side-effects": "error",
		'@typescript-eslint/no-misused-promises': 'error',
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-readonly-parameter-types": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/sort-type-constituents": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"no-shadow": "off", // replaced by @typescript-eslint/no-shadow
		"@typescript-eslint/no-shadow": "error",
		"no-return-await": "off", // replaced by @typescript-eslint/return-await
		"@typescript-eslint/return-await": "always",

		// Unicorn Rules
		'unicorn/filename-case': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-await-expression-member': 'off',
	},
}
