import { Routes, Route } from "react-router-dom";

import { routesArr } from "./routes/routes.data";

export const Router = () => {
	return (
		<Routes>
			{routesArr.map(({ path, Page }) => (
				<Route
					key={path}
					path={path}
					element={<Page />}
				/>
			))}
		</Routes>
	);
};
