import styles from "./Header.module.scss";

import { Account } from "./account/Account";
import { Search } from "./search/Search";

import { IconContext } from "react-icons";

import { AiOutlineBell } from "react-icons/ai";

export const Header = () => {
	return (
		<header className={styles.root}>
			<IconContext.Provider
				value={{
					color: "#BBBBBD"
				}}>
				<Search />
				<AiOutlineBell size={"25px"} />
				<Account />
			</IconContext.Provider>
		</header>
	);
};
