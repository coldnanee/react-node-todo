import { Navigate } from "react-router-dom";
import { Form } from "./form/Form";

import { TLoginForm } from "./form/types";

import { useForm, FormProvider } from "react-hook-form";

export const LoginPage = () => {
	const methods = useForm<TLoginForm>();

	return (
		<FormProvider {...methods}>
			<Form />
		</FormProvider>
	);
};

export const NavigateToLoginPage = () => {
	return <Navigate to="/login" />;
};
