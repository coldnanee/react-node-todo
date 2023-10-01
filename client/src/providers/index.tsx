import { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../theme/ThemeProvider";
import { LanguageProvider } from "../languages/context/LanguageProvider";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<LanguageProvider>{children}</LanguageProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Providers;
