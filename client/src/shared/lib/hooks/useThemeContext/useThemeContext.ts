import { ThemeContext, TThemeContext } from "../../context/theme";

import { useContext } from "react";

export const useThemeContext = () => useContext<TThemeContext>(ThemeContext);
