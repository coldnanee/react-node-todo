import { TOptionsItem } from "../types";

import { IoSettingsSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export const generalOptionsArr: TOptionsItem[] = [
	{
		Icon: IoSettingsSharp,
		label: "Settings",
		path: "/settings"
	},
	{
		Icon: BiSupport,
		label: "Support",
		path: "/support"
	}
];
