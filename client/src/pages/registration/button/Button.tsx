import styles from "./Button.module.scss";

import { useTranslation } from "react-i18next";

export const Button = () => {
	const { t } = useTranslation();

	return (
		<button className={styles.root}>{t("registration.Registration")}</button>
	);
};
