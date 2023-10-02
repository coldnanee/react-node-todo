import { createContext } from "react";

export type TThemeContext = {
	activeTheme: string;
	setActiveTheme: (theme: string) => void;
};

export const ThemeContext = createContext<TThemeContext>({
	activeTheme: "",
	setActiveTheme: () => {}
});
