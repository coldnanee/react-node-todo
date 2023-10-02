import styles from "./styles.module.scss";

import { ReactNode } from "react";

import { Header } from "@/widgets/Header";
import { Aside } from "@/widgets/Aside";

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
