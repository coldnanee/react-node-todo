import ReactDOM from "react-dom/client";
import Providers from "./providers";
import "../src/styles/index.scss";
import "./languages/i18n";

import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Providers>
		<Router />
	</Providers>
);
