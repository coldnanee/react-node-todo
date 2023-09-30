import { TRoutesArrItem } from "./types";

import { HomePage } from "../../pages/home/Home";
import { ProjectPage } from "../../pages/project/Project";
import { ProjectsPage } from "../../pages/projects/Projects";
import { SchedulePage } from "../../pages/schedule/Schedule";
import { SettingsPage } from "../../pages/settings/Settings";
import { SupportPage } from "../../pages/support/Support";

import { LoginPage, NavigateToLoginPage } from "../../pages/login/Login";
import {
	RegistrationPage,
	NavigateToRegistrationPage
} from "../../pages/registration/Registration";

const privateRoutesArr: TRoutesArrItem[] = [
	{
		path: "/",
		Page: HomePage
	},
	{
		path: "/schedule",
		Page: SchedulePage
	},
	{
		path: "/projects/:name",
		Page: ProjectPage
	},
	{
		path: "/projects",
		Page: ProjectsPage
	},
	{
		path: "/support",
		Page: SupportPage
	},
	{
		path: "/settings",
		Page: SettingsPage
	}
];

const publicRoutesArr: TRoutesArrItem[] = [
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

export const routesArr = isAuth ? privateRoutesArr : publicRoutesArr;
