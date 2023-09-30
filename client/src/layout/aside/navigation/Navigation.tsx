import { OptionsList } from "../ui/options-list/OptionsList";

import styles from "./Navigation.module.scss";

import { navigationOptionsArr } from "./navigation.data";

export const Navigation = () => {
	return (
		<div className={styles.root}>
			<OptionsList list={navigationOptionsArr} />
		</div>
	);
};
