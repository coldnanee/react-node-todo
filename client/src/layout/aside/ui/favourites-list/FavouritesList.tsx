import { FavouritesItem } from "../favourites-item/FavouritesItem";

import { TFavouritesItem } from "../../../../types";

import styles from "./FavouritesList.module.scss";

import { useTranslation } from "react-i18next";

export const FavouritesList = ({ list }: { list: TFavouritesItem[] }) => {
	const { t } = useTranslation();

	return (
		<section className={styles.root}>
			<h3 className={styles.root__title}>{t("aside.Favourites")}</h3>
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
