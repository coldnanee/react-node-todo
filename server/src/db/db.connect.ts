import mongoose from "mongoose";

const { DB_USER, DB_PASS, DB_NAME } = process.env as {
	DB_USER: string;
	DB_PASS: string;
	DB_NAME: string;
};

export const connectDB = async () => {
	await mongoose.connect(
		`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.isr5qiu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
	);
};
