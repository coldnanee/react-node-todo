import express from "express";
import { config } from "dotenv";
config({ path: "./config/.env" });

const app = express();

const { PORT } = process.env as { PORT: string };

const start = () => {
	try {
		app.listen(PORT, () => {
			console.log(`Api is starting on port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
