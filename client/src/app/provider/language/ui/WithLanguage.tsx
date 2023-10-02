import { LanguageContext } from "@/shared/lib/context/language";

import { useState, ReactNode } from "react";

export const WithLanguage = ({ children }: { children: ReactNode }) => {
	const [activeLanguage, setActiveLanguage] = useState<string>("");

	return (
		<LanguageContext.Provider value={{ activeLanguage, setActiveLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
