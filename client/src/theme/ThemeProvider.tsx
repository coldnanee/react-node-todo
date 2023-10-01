import { ThemeContext } from "./useThemeContext.js";

import { useState, useEffect, ReactNode } from "react";

import { themes } from "./theme.data.js";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const getActiveTheme = () => {
		const theme = localStorage.getItem("theme") || "";

		if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			return themes.light;
		}

		if (Object.keys(themes).includes(theme)) {
			return theme;
		}

		return themes.dark;
	};

	const [activeTheme, setActiveTheme] = useState<string>(getActiveTheme);

	useEffect(() => {
		document.body.setAttribute("data-theme", activeTheme);
		localStorage.setItem("theme", activeTheme);
	}, [activeTheme]);

	return (
		<ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
