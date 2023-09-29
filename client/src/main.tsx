import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./providers";
import "../src/styles/index.scss";

import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Providers>
		<Router />
	</Providers>
);
