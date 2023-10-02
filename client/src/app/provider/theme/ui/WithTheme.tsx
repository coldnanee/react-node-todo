import { ThemeContext } from "@/shared/lib/context/theme";

import { useState, ReactNode } from "react";

export const WithTheme = ({ children }: { children: ReactNode }) => {
	const [activeTheme, setActiveTheme] = useState<string>("");

	return (
		<ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
