import { generalOptionsArr } from "../../model/general.data";

import { AsideItem } from "../AsideItem";

export const AsideGeneral = () => {
	return (
		<AsideItem
			title="General"
			list={generalOptionsArr}
		/>
	);
};
