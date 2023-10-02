import { Provider } from "react-redux";

import { store } from "../model/store";

import { ReactNode } from "react";

export const WithRedux = ({ children }: { children: ReactNode }) => {
	return <Provider store={store}>{children}</Provider>;
};
