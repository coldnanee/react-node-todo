import { ThemeContext } from "@/shared/lib/context/theme";

import { useState, ReactNode, useEffect } from "react";

import { themes } from "..";

export const WithTheme = ({ children }: { children: ReactNode }) => {
	const getActiveTheme = () => {
		const activeTheme = localStorage.getItem("theme") || "";

		if (Object.keys(themes).includes(activeTheme)) {
			return activeTheme;
		}

		if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			return themes.light;
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
