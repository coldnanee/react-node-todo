import { LanguageContext, TLanguageContext } from "../../context/language";

import { useContext } from "react";

//prettier-ignore
export const useLanguageContext = () => useContext<TLanguageContext>(LanguageContext);
