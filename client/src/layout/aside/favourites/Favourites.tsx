import { favouritesOptionsArr } from "./favourites.data";

import { FavouritesList } from "../ui/favourites-list/FavouritesList";

export const Favourites = () => {
	return <FavouritesList list={favouritesOptionsArr} />;
};
