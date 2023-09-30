import { generalOptionsArr } from "./general.data";

import { OptionsList } from "../ui/options-list/OptionsList";

export const General = () => {
	return (
		<OptionsList
			list={generalOptionsArr}
			title="General"
		/>
	);
};
