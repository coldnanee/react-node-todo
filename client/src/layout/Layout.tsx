import { ReactNode } from "react";
import styles from "./Layout.module.scss";

import { Header } from "./header/Header";
import { Aside } from "./aside/Aside";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.root}>
			<Aside />
			<div className={styles.root__body}>
				<Header />
				<div className={styles.root__body__wrapper}>{children}</div>
			</div>
		</div>
	);
};
