export type TRegistrationFormPlaces = "email" | "password" | "confirmPassword";
export type TRegistrationForm = Record<TRegistrationFormPlaces, string>;
export type TRegistrationFormPlacesItem = {
	name: TRegistrationFormPlaces;
	type: "text" | "password";
};
