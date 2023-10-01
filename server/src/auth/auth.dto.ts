import { TUserPayload } from "../types";

export class AuthDto {
	public email: string;
	public _id: string;

	constructor(user: TUserPayload) {
		this._id = user._id;
		this.email = user.email;
	}
}
