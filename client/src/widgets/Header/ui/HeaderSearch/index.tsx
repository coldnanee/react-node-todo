import styles from "./styles.module.scss";

import { SlMagnifier } from "react-icons/sl";

export const HeaderSearch = () => {
	return (
		<div className={styles.root}>
			<input
				type="text"
				className={styles.root__input}
				placeholder="Search"
			/>
			<SlMagnifier
				className={styles.root__image}
				size={"18px"}
				color={"#8a8a8b"}
			/>
		</div>
	);
};
