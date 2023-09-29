import { TOptionsItem } from "../types";

import {
	AiFillHome,
	AiFillFolderOpen,
	AiFillClockCircle
} from "react-icons/ai";

export const navigationOptionsArr: TOptionsItem[] = [
	{
		Icon: AiFillHome,
		label: "Home",
		path: "/"
	},
	{
		Icon: AiFillFolderOpen,
		label: "Projects",
		path: "/projects"
	},
	{
		Icon: AiFillClockCircle,
		label: "Schedule",
		path: "/schedule"
	}
];
