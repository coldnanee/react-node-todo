import { useFormContext } from "react-hook-form";

import { TLoginForm } from "./types";

import styles from "./Form.module.scss";

import { Logo } from "../logo/Logo";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

import { loginFormPlacesArr } from "./form.data";

export const Form = () => {
	const { handleSubmit } = useFormContext<TLoginForm>();

	const onSubmit = (data: TLoginForm) => {
		console.log(data);
	};

	return (
		<section className={styles.root}>
			<div className={styles.root__body}>
				<Logo />
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.root__body__form}>
					{loginFormPlacesArr.map((item) => (
						<Input
							{...item}
							key={item.name}
						/>
					))}
					<Button />
				</form>
			</div>
		</section>
	);
};
