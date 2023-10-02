import { LanguageContext } from "@/shared/lib/context/language";

import { languages } from "..";

import { useState, ReactNode, useEffect } from "react";

export const WithLanguage = ({ children }: { children: ReactNode }) => {
	const getActiveLanguage = () => {
		const language = localStorage.getItem("language") || "";

		if (Object.keys(languages).includes(language)) {
			return language;
		}
		return languages.en;
	};

	const [activeLanguage, setActiveLanguage] =
		useState<string>(getActiveLanguage);

	useEffect(() => {
		localStorage.setItem("language", activeLanguage);
	}, [activeLanguage]);

	return (
		<LanguageContext.Provider value={{ activeLanguage, setActiveLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
