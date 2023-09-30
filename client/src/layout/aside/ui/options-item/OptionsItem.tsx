import { TOptionsItem } from "../../types";

import { useThemeContext } from "../../../../theme/useThemeContext";

import { useLocation } from "react-router-dom";

import styles from "./OptionsItem.module.scss";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export const OptionsItem = ({
	option: { Icon, label, path }
}: {
	option: TOptionsItem;
}) => {
	const { activeTheme } = useThemeContext();

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
				<Icon
					style={{
						color: isPathActive
							? activeTheme === "light"
								? "#0e131f"
								: "#fffdfd"
							: "#6c737c"
					}}
				/>
				<p>{t(`aside.${label}`)}</p>
			</Link>
		</li>
	);
};
