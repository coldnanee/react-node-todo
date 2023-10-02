import { HomePage } from "@/pages/home";
import { LoginPage, NavigateToLoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";

import { FC } from "react";

type TRouteConfigItem = {
	path: string;
	Page: FC;
};

const privateRoutesArr: TRouteConfigItem[] = [
	{
		path: "/",
		Page: HomePage
	}
];

const publicRoutesArr: TRouteConfigItem[] = [
	{
		path: "/",
		Page: NavigateToLoginPage
	},
	{
		path: "/login",
		Page: LoginPage
	},
	{
		path: "/registration",
		Page: RegistrationPage
	}
];

const isAuth = localStorage.getItem("jwt");

export const routeConfig = isAuth ? privateRoutesArr : publicRoutesArr;
