import styles from "./Input.module.scss";

import { TLoginFormPlaces } from "../form/types";

import { TLoginForm } from "../form/types";

import { useFormContext } from "react-hook-form";

export const Input = ({
	name,
	type
}: {
	name: TLoginFormPlaces;
	type: "text" | "password";
}) => {
	const { register } = useFormContext<TLoginForm>();

	return (
		<input
			spellCheck="false"
			type={type}
			className={styles.root}
			{...register(name)}
			placeholder={name}
		/>
	);
};
