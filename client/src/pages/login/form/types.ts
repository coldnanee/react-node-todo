export type TLoginFormPlaces = "email" | "password";
export type TLoginForm = Record<TLoginFormPlaces, string>;
export type TLoginFormPlacesItem = {
	name: TLoginFormPlaces;
	type: "text" | "password";
};
