import { createContext, useContext } from "react";

import { TLanguageContext } from "./types";

export const LanguageContext = createContext<TLanguageContext>({
	activeLanguage: "",
	setActiveLanguage: () => {}
});

//prettier-ignore

export const useLanguageContext = () => useContext<TLanguageContext>(LanguageContext);
