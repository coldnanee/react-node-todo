import styles from "./Search.module.scss";

import { SlMagnifier } from "react-icons/sl";

import { useTranslation } from "react-i18next";

export const Search = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<input
				type="text"
				className={styles.root__input}
				placeholder={t("search.Placeholder")}
			/>
			<SlMagnifier
				className={styles.root__image}
				size={"18px"}
				color={"#8a8a8b"}
			/>
		</div>
	);
};
