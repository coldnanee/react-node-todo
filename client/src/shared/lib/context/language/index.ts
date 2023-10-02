import { createContext } from "react";

export type TLanguageContext = {
	activeLanguage: string;
	setActiveLanguage: (language: string) => void;
};

export const LanguageContext = createContext<TLanguageContext>({
	activeLanguage: "",
	setActiveLanguage: () => {}
});
