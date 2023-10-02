import { routeConfig } from "@/shared/config/route";

import { Route, Routes, BrowserRouter } from "react-router-dom";

export const WithRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routeConfig.map(({ path, Page }) => (
					<Route
						key={path}
						path={path}
						element={<Page />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
};
