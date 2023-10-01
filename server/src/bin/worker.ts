import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { errorsMiddleware } from "../errors";
import { router } from "../router";
import { connectDB } from "../db";

const { PORT, CLIENT_URL } = process.env as {
	PORT: string;
	CLIENT_URL: string;
};

export const worker = () => {
	const app = express();

	app.use(
		cors({
			credentials: true,
			origin: CLIENT_URL
		})
	);
	app.use(cookieParser());
	app.use("/api", router);
	app.use(errorsMiddleware);

	const start = async () => {
		try {
			app.listen(PORT, () => {
				// console.log(`Api is starting on port ${PORT}`);
			});

			await connectDB();
		} catch (e) {
			console.log(e);
		}
	};

	start();
};
