const HttpBackend = require("i18next-http-backend/cjs");
const FsBackend = require("i18next-fs-backend/cjs");
const ChainedBackend = require("i18next-chained-backend").default;
const LocalStorageBackend = require("i18next-localstorage-backend").default;
const LanguageDetector = require("i18next-browser-languagedetector");

const isBrowser = typeof window !== "undefined";
const path = !isBrowser ? require("path") : null;

const localePath = path ? `${path.resolve("./public/locales")}/` : "locales";

module.exports = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "pt"],
	},
	localePath,
	backend: {
		loadPath: `${localePath}{{lng}}/{{ns}}.json`,
		backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [FsBackend],
		backendOptions: isBrowser
			? [
					{ expirationTime: 60 * 60 * 1000 }, // LocalStorageBackend
					{ loadPath: "/locales/{{lng}}/{{ns}}.json" }, // HttpBackend
				]
			: [
					{
						loadPath: `${localePath}{{lng}}/{{ns}}.json`,
					},
				],
	},
	use: isBrowser ? [HttpBackend] : [FsBackend],
	react: {
		useSuspense: false,
	},
	initOptions: {
		supportedLngs: ["en", "pt"],
		fallbackLng: "en",
		lng: "en",
		ns: ["main"],
		defaultNS: "main",
		detection: {
			order: ["cookie", "localStorage", "path", "subdomain"],
			caches: ["cookie"],
		},
	},
	serializeConfig: false,
};
