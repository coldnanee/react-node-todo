import { FavouritesItem } from "../favourites-item/FavouritesItem";

import { TFavouritesItem } from "../../../../types";

import styles from "./FavouritesList.module.scss";

export const FavouritesList = ({
	list,
	title
}: {
	list: TFavouritesItem[];
	title: string;
}) => {
	return (
		<section className={styles.root}>
			<h3 className={styles.root__title}>{title}</h3>
			<nav className={styles.root__body}>
				<ul>
					{list.map((item) => (
						<FavouritesItem
							key={item.name}
							item={item}
						/>
					))}
				</ul>
			</nav>
		</section>
	);
};
