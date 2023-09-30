import styles from "./Header.module.scss";

import { Account } from "./account/Account";
import { Search } from "./search/Search";

import { IconContext } from "react-icons";

import { AiOutlineBell } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";

export const Header = () => {
	return (
		<header className={styles.root}>
			<IconContext.Provider
				value={{
					color: "#BBBBBD"
				}}>
				<Search />
				<div className={styles.root__profile}>
					<AiOutlineBell size={"25px"} />
					<BsEnvelope size={"25px"} />
					<Account />
				</div>
			</IconContext.Provider>
		</header>
	);
};
