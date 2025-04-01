import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		supportedLngs: ["en", "pt"],
		lng: "en",
		fallbackLng: "en",
		ns: ["main", "cv"],
		defaultNS: "main",
		detection: {
			order: ["cookie", "localStorage", "path", "subdomain"],
			caches: ["cookie"],
		},
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
		react: {
			useSuspense: false,
		},
	});

export default i18n;
