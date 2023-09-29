import styles from "./Favourites.module.scss";

import { favouritesOptionsArr } from "./favourites.data";

import { FavouritesList } from "../ui/favourites-list/FavouritesList";

export const Favourites = () => {
	return (
		<section className={styles.root}>
			<h3 className={styles.root__title}>Favourites</h3>
			<FavouritesList list={favouritesOptionsArr} />
		</section>
	);
};
