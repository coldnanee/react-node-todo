import { Suspense } from "react";

import { WithRouter } from "./provider/router";
import { WithQueryClient } from "./provider/query-client";
import { WithRedux } from "./provider/redux";
import { WithTheme } from "./provider/theme";
import { WithLanguage } from "./provider/language";

import "@/shared/config/i18n";
import "./styles/index.scss";

export const App = () => {
	return (
		<Suspense fallback="">
			<WithQueryClient>
				<WithRedux>
					<WithTheme>
						<WithLanguage>
							<WithRouter />
						</WithLanguage>
					</WithTheme>
				</WithRedux>
			</WithQueryClient>
		</Suspense>
	);
};
