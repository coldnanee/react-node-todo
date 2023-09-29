import { TFavouritesItem } from "../../../../types";

import styles from "./FavouritesItem.module.scss";

import { Link } from "react-router-dom";

export const FavouritesItem = ({
	item: { background, name }
}: {
	item: TFavouritesItem;
}) => {
	return (
		<li>
			<Link
				to={`/projects/${name}`}
				className={styles.root}>
				<span style={{ background }}></span>
				<p>{name}</p>
			</Link>
		</li>
	);
};
