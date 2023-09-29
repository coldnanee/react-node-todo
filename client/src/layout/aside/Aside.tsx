import styles from "./Aside.module.scss";

import { IconContext } from "react-icons";

import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { Favourites } from "./favourites/Favourites";

export const Aside = () => {
	return (
		<aside className={styles.root}>
			<IconContext.Provider value={{ color: "#BBBBBD", size: "20px" }}>
				<Logo />
				<Navigation />
			</IconContext.Provider>
			<Favourites />
		</aside>
	);
};
