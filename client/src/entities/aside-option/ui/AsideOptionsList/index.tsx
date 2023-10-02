import type { TAsideOptionsItem } from "@/widgets/Aside/types";

import { AsideOptionsItem } from "../AsideOptionsItem";

export const AsideOptionsList = ({ list }: { list: TAsideOptionsItem[] }) => {
	return (
		<ul>
			{list.map((option) => (
				<AsideOptionsItem
					key={option.label}
					option={option}
				/>
			))}
		</ul>
	);
};
