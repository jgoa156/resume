const { i18n } = require("./next-i18next.config");

const basePath = "";

module.exports = {
	i18n,
	reactStrictMode: false,
	env: {
		basePath: basePath,
		img: `${basePath}/img`,
	},
};
