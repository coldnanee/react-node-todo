import styles from "./OptionsList.module.scss";

import { TOptionsItem } from "../../types";

import { OptionsItem } from "../options-item/OptionsItem";

export const OptionsList = ({
	list,
	title
}: {
	list: TOptionsItem[];
	title?: string;
}) => {
	return (
		<section className={styles.root}>
			<h3 className={styles.root__title}>{title}</h3>
			<ul className={styles.root__body}>
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
