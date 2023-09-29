import styles from "./Account.module.scss";

import TestAvatarImage from "./images/5.jpg";

import { IoIosArrowDown } from "react-icons/io";

export const Account = () => {
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
