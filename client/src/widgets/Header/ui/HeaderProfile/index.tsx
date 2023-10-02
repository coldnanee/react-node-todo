import styles from "./styles.module.scss";

import TestAvatarImage from "./assets/test.jpg";

import { IoIosArrowDown } from "react-icons/io";

export const HeaderProfile = () => {
	return (
		<div className={styles.root}>
			<img
				className={styles.root__avatar}
				src={TestAvatarImage}
				alt="avatar"
			/>
			<p className={styles.root__nickname}>Sam Jackson</p>
			<IoIosArrowDown size={"20px"} />
		</div>
	);
};
