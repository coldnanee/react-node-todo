import jwt from "jsonwebtoken";

import { TUserPayload } from "../types";
import TokenModel from "../db/models/TokenModel";

class TokenService {
	generateTokens(user: TUserPayload): {
		accessToken: string;
		refreshToken: string;
	} {
		const accessToken = jwt.sign(
			{ user },
			process.env.JWT_ACCESS_SECRET ?? "",
			{
				expiresIn: "30m"
			}
		);

		const refreshToken = jwt.sign(
			{ user },
			process.env.JWT_REFRESH_SECRET ?? "",
			{
				expiresIn: "30d"
			}
		);

		return { accessToken, refreshToken };
	}
	async saveRefreshTokenToDb(user: string, refreshToken: string) {
		const tokenFromDb = await TokenModel.findOne({ user });
		if (tokenFromDb) {
			tokenFromDb.refreshToken = refreshToken;
			return tokenFromDb.save();
		}
		const token = new TokenModel({ user, refreshToken: refreshToken });
		return token.save();
	}
}

export default new TokenService();
