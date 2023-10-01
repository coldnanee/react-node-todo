import { useFormContext } from "react-hook-form";

import { TRegistrationForm } from "./types";

import styles from "./Form.module.scss";

import { Logo } from "../logo/Logo";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

import { Link } from "react-router-dom";

import { registrationFormPlacesArr } from "./form.data";

export const Form = () => {
	const { handleSubmit } = useFormContext<TRegistrationForm>();

	const onSubmit = (data: TRegistrationForm) => {
		console.log(data);
	};

	return (
		<section className={styles.root}>
			<div className={styles.root__body}>
				<Logo />
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.root__body__form}>
					{registrationFormPlacesArr.map((item) => (
						<Input
							{...item}
							key={item.name}
						/>
					))}
					<Button />
					<Link
						className={styles.root__body__link}
						to="/login">
						Login
					</Link>
				</form>
			</div>
		</section>
	);
};
