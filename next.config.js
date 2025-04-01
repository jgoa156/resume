const { i18n } = require("./next-i18next.config");

const basePath = "";

module.exports = {
  i18n,
  /*async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		]
	},*/
  reactStrictMode: true,
  env: {
    basePath: basePath,
    img: `${basePath}/img`,
  },
};
