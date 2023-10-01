import LogoImage from "./images/logo.svg";

import styles from "./Logo.module.scss";

export const Logo = () => {
	return (
		<div className={styles.root}>
			<img
				src={LogoImage}
				alt="logo"
			/>
		</div>
	);
};
