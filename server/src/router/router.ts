import { Router } from "express";

import { auth } from "../auth";

const routes = Router();

routes.use("/auth", auth);

export const router = routes;
