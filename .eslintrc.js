module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/jsx-props-no-spreading": [
			"error",
			{
				exceptions: ["children"],
			},
		],
		"react/prop-types": ["error", { ignore: ["children"] }],
		"@typescript-eslint/no-children-prop": "off",
	},
};
