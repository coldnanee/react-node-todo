import { TOptionsItem } from "../../types";

import { useLocation } from "react-router-dom";

import styles from "./OptionsItem.module.scss";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export const OptionsItem = ({
	option: { Icon, label, path }
}: {
	option: TOptionsItem;
}) => {
	const { pathname } = useLocation();

	const { t } = useTranslation();

	const isPathActive = pathname === path;

	const rootStyles = [styles.root];

	if (isPathActive) {
		rootStyles.push(styles.active);
	}

	return (
		<li>
			<Link
				to={path}
				className={rootStyles.join(" ")}>
				<Icon style={{ color: isPathActive ? "#0e131f" : "#BCBCBE" }} />
				<p>{t(`aside.${label}`)}</p>
			</Link>
		</li>
	);
};
