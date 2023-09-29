import LogoImage from "./images/logo.svg";

import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

export const Logo = () => {
	return (
		<div className={styles.root}>
			<Link to="/">
				<img
					src={LogoImage}
					alt="logo"
				/>
			</Link>
		</div>
	);
};
