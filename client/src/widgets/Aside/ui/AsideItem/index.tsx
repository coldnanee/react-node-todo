import styles from "./styles.module.scss";

import type { TAsideOptionsItem } from "../../types";

import { AsideOptionsList } from "@/entities/aside-option";

export const AsideItem = ({
	list,
	title
}: {
	list: TAsideOptionsItem[];
	title?: string;
}) => {
	return (
		<section className={styles.root}>
			<h3 className={styles.root__title}>{title}</h3>
			<div className={styles.root__body}>
				<AsideOptionsList list={list} />
			</div>
		</section>
	);
};
