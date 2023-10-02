import { useThemeContext } from "@/shared/lib/hooks/useThemeContext/useThemeContext";

import type { TAsideOptionsItem } from "@/widgets/Aside/types";

import { useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

export const AsideOptionsItem = ({
	option: { Icon, label, path }
}: {
	option: TAsideOptionsItem;
}) => {
	const { activeTheme } = useThemeContext();

	const { pathname } = useLocation();

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
				<p>{label}</p>
			</Link>
		</li>
	);
};
