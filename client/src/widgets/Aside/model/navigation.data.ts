import {
	AiFillHome,
	AiFillFolderOpen,
	AiFillClockCircle
} from "react-icons/ai";

import type { TAsideOptionsItem } from "../types";

export const navigationOptionsArr: TAsideOptionsItem[] = [
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
