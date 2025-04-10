const webpack = require("webpack");
const { i18n } = require("./next-i18next.config");

const basePath = process.env.BASE;

module.exports = {
	i18n: {
		...i18n,
		localeDetection: false,
	},
	reactStrictMode: false,
	env: {
		basePath: basePath,
		img: `${basePath}/img`,
	},
	webpack(config, { isServer }) {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				path: false,
			};

			config.plugins.push(
				new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
					resource.request = resource.request.replace(/^node:/, "");
				}),
			);
		}

		// Add font loader
		config.module.rules.push({
			test: /\.(woff(2)?|ttf|otf|eot)$/,
			type: "asset/resource",
			generator: {
				filename: "public/fonts/[name][ext]",
			},
		});

		return config;
	},
};
