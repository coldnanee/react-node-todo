import { Form } from "./form/Form";

import { useForm, FormProvider } from "react-hook-form";

export const RegistrationPage = () => {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<Form />
		</FormProvider>
	);
};
