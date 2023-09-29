import styles from "./Search.module.scss";

import { SlMagnifier } from "react-icons/sl";

export const Search = () => {
	return (
		<div className={styles.root}>
			<input
				type="text"
				className={styles.root__input}
				placeholder="Search by name, label, task or team member..."
			/>
			<SlMagnifier
				className={styles.root__image}
				size={"18px"}
				color={"#8a8a8b"}
			/>
		</div>
	);
};
