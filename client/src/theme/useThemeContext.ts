import { createContext, useContext } from "react";

import { TThemeContext } from "./types";

export const ThemeContext = createContext<TThemeContext>({
	activeTheme: "",
	setActiveTheme: () => {}
});

export const useThemeContext = () => useContext<TThemeContext>(ThemeContext);
