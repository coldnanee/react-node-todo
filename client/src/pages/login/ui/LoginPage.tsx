import { Navigate } from "react-router-dom";

import { LoginForm } from "@/widgets/LoginForm";

const LoginPage = () => {
	return <LoginForm />;
};

export const NavigateToLoginPage = () => <Navigate to="/login" />;

export default LoginPage;
