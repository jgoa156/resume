const basePath = "";

module.exports = {
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
		img: `${basePath}/img`
	}
};
