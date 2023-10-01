import styles from "./Input.module.scss";

import { TLoginFormPlaces } from "../form/types";

import { TLoginForm } from "../form/types";

import { useTranslation } from "react-i18next";

import { useFormContext } from "react-hook-form";

export const Input = ({
	name,
	type
}: {
	name: TLoginFormPlaces;
	type: "text" | "password";
}) => {
	const { register } = useFormContext<TLoginForm>();

	const { t } = useTranslation();

	return (
		<input
			spellCheck="false"
			type={type}
			className={styles.root}
			{...register(name)}
			placeholder={t(`login.${name}`)}
		/>
	);
};
