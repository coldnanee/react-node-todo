import UserModel from "../db/models/UserModel";

import { ApiError } from "../errors";

import bcrypt from "bcrypt";

import TokenService from "../token/token.service";

import { AuthDto } from "./auth.dto";

class AuthService {
	async login(
		email: string,
		password: string
	): Promise<{ accessToken: string; refreshToken: string }> {
		const candidate = await UserModel.findOne({ email });

		if (!candidate) {
			throw new ApiError(400, "User not found");
		}

		const isPasswordValid = await bcrypt.compare(password, candidate.password);

		if (!isPasswordValid) {
			throw new ApiError(400, "Password is not valid");
		}

		const tokens = TokenService.generateTokens(new AuthDto(candidate));

		await TokenService.saveRefreshTokenToDb(candidate._id, tokens.refreshToken);

		return tokens;
	}

	async registration(email: string, password: string) {
		const candidate = await UserModel.findOne({ email });

		if (candidate) {
			throw new ApiError(400, "Email is busy");
		}

		console.log("ss");

		const hashPassword = await bcrypt.hash(password, 7);

		const user = new UserModel({ email, password: hashPassword });

		return user.save();
	}
}

export default new AuthService();
