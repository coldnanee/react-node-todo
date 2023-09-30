import styles from "./OptionsList.module.scss";

import { TOptionsItem } from "../../types";

import { OptionsItem } from "../options-item/OptionsItem";

import { useTranslation } from "react-i18next";

export const OptionsList = ({
	list,
	title
}: {
	list: TOptionsItem[];
	title?: string;
}) => {
	const { t } = useTranslation();

	return (
		<section className={styles.root}>
			{title && <h3 className={styles.root__title}>{t(`aside.${title}`)}</h3>}
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
