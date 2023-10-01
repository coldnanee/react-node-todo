import styles from "./Input.module.scss";

import { TRegistrationFormPlaces } from "../form/types";

import { TRegistrationForm } from "../form/types";

import { useTranslation } from "react-i18next";

import { useFormContext } from "react-hook-form";

export const Input = ({
	name,
	type
}: {
	name: TRegistrationFormPlaces;
	type: "text" | "password";
}) => {
	const { register } = useFormContext<TRegistrationForm>();

	const { t } = useTranslation();

	return (
		<input
			spellCheck="false"
			type={type}
			className={styles.root}
			{...register(name)}
			placeholder={t(`registration.${name}`)}
		/>
	);
};
