import styles from "./styles.module.scss";

import { IconContext } from "react-icons";

import { Logo } from "./AsideLogo";
import { AsideGeneral } from "./AsideGeneral";
import { AsideNavigation } from "./AsideNavigation";
// import { Favourites } from "./favourites/Favourites";

export const Aside = () => {
	return (
		<aside className={styles.root}>
			<IconContext.Provider value={{ color: "#BBBBBD", size: "20px" }}>
				<Logo />
				<AsideNavigation />
				<AsideGeneral />
			</IconContext.Provider>
			{/* <Favourites /> */}
		</aside>
	);
};
