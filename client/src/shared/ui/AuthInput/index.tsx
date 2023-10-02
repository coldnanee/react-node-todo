import styles from "./styles.module.scss";

import { useFormContext } from "react-hook-form";

export const AuthInput = ({ name, type }: { name: string; type: string }) => {
	const { register } = useFormContext();

	return (
		<input
			spellCheck="false"
			type={type}
			{...register(name)}
			className={styles.root}
			required={true}
		/>
	);
};
