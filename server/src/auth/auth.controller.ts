import type { Request, Response, NextFunction } from "express";

import AuthService from "./auth.service";

class AuthController {
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.query as {
				email: string;
				password: string;
			};

			const tokens = await AuthService.login(email, password);

			return res.json(tokens);
		} catch (e) {
			// TODO:
			console.log(e);
			next(e);
		}
	}

	async registration(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.query as {
				email: string;
				password: string;
			};

			await AuthService.registration(email, password);

			return res.json({ message: true });
		} catch (e) {
			// TODO:
			console.log(e);
			next(e);
		}
	}
}

export default new AuthController();
