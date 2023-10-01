import { LanguageContext } from "./useLanguageContext";

import { languages } from "../i18n";

import { useTranslation } from "react-i18next";

import { ReactNode, useState, useEffect } from "react";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const getActiveLanguage = () => {
		const language = localStorage.getItem("language") || "";

		if (Object.keys(languages).includes(language)) {
			return language;
		}
		return languages.en;
	};

	const { i18n } = useTranslation();

	//prettier-ignore

	const [activeLanguage, setActiveLanguage] = useState<string>(getActiveLanguage);

	useEffect(() => {
		localStorage.setItem("language", activeLanguage);
		i18n.changeLanguage(activeLanguage);
	}, [activeLanguage]);

	return (
		<LanguageContext.Provider value={{ activeLanguage, setActiveLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
