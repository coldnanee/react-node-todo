import { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../theme/theme.provider";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<BrowserRouter>
			<ThemeProvider>{children}</ThemeProvider>
		</BrowserRouter>
	);
};

export default Providers;
