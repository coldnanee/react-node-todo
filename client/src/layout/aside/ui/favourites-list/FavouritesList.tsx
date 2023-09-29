import { FavouritesItem } from "../favourites-item/FavouritesItem";

import { TFavouritesItem } from "../../../../types";

import styles from "./FavouritesList.module.scss";

export const FavouritesList = ({ list }: { list: TFavouritesItem[] }) => {
	return (
		<nav className={styles.root}>
			<ul>
				{list.map((item) => (
					<FavouritesItem
						key={item.name}
						item={item}
					/>
				))}
			</ul>
		</nav>
	);
};
