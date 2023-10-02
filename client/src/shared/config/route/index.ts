import { HomePage } from "@/pages/home";
import { LoginPage, NavigateToLoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import { SchedulePage } from "@/pages/schedule";
import { ProjectsPage } from "@/pages/projects";
import { SupportPage } from "@/pages/support";
import { SettingsPage } from "@/pages/settings";

import { FC } from "react";

type TRouteConfigItem = {
	path: string;
	Page: FC;
};

const privateRoutesArr: TRouteConfigItem[] = [
	{
		path: "/",
		Page: HomePage
	},
	{
		path: "/projects",
		Page: ProjectsPage
	},
	{
		path: "/schedule",
		Page: SchedulePage
	},
	{
		path: "/settings",
		Page: SettingsPage
	},
	{
		path: "/support",
		Page: SupportPage
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
