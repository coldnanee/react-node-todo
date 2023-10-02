import { AsideItem } from "../AsideItem";

import { navigationOptionsArr } from "../../model/navigation.data";

export const AsideNavigation = () => {
	return <AsideItem list={navigationOptionsArr} />;
};
