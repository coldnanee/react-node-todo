import { Navigate } from "react-router-dom";

export const LoginPage = () => {
	return <div>Login</div>;
};

export const NavigateToLoginPage = () => {
	return <Navigate to="/login" />;
};
