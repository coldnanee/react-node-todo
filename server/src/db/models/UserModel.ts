import { Schema, model } from "mongoose";

import { TUser } from "../../types";

const user = new Schema<TUser>({
	email: { type: String, require: true, unique: true },
	password: { type: String, require: true }
});

export default model<TUser>("User", user);
