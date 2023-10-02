import styles from "./styles.module.scss";

import { ReactNode } from "react";

import { Header } from "@/widgets/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.root}>
			<aside></aside>
			<div className={styles.root__body}>
				<Header />
				<div className={styles.root__body__wrapper}>{children}</div>
			</div>
		</div>
	);
};
