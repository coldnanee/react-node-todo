import { TRoutesArrItem } from "./types";

import { HomePage } from "../../pages/home/Home";
import { ProjectsPage } from "../../pages/projects/Projects";
import { SchedulePage } from "../../pages/schedule/Schedule";

import { LoginPage } from "../../pages/login/Login";
import { RegistrationPage } from "../../pages/registration/Registration";

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
		path: "/projects",
		Page: ProjectsPage
	}
];

const publicRoutesArr: TRoutesArrItem[] = [
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
