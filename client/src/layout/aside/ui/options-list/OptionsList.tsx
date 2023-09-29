import styles from "./OptionsList.module.scss";

import { TOptionsItem } from "../../types";

import { OptionsItem } from "../options-item/OptionsItem";

export const OptionsList = ({ list }: { list: TOptionsItem[] }) => {
	return (
		<section className={styles.root}>
			<ul>
				{list.map((option) => (
					<OptionsItem
						key={option.label}
						option={option}
					/>
				))}
			</ul>
		</section>
	);
};
