import { OptionsList } from "../ui/options-list/OptionsList";

import { navigationOptionsArr } from "./navigation.data";

export const Navigation = () => {
	return <OptionsList list={navigationOptionsArr} />;
};
