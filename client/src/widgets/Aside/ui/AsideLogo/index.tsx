import LogoImage from "@/shared/assets/logo.svg";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

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
