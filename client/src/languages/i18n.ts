import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLocale from "./locales/en.json";
import ruLocale from "./locales/ru.json";

export const languages = {
	en: "en",
	ru: "ru"
};

const resources = {
	en: {
		translation: enLocale
	},
	ru: {
		translation: ruLocale
	}
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
