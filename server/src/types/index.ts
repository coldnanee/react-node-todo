export type TUser = {
	_id: string;
	email: string;
	password: string;
};

export type TUserPayload = Omit<TUser, "password">;
