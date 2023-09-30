import { TOptionsItem } from "../types";

import { FcSettings } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";

export const generalOptionsArr: TOptionsItem[] = [
	{
		Icon: FcSettings,
		label: "Settings",
		path: "/settings"
	},
	{
		Icon: BiSupport,
		label: "Support",
		path: "/support"
	}
];
