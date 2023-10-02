import { IoSettingsSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

import type { TAsideOptionsItem } from "../types";

export const generalOptionsArr: TAsideOptionsItem[] = [
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
