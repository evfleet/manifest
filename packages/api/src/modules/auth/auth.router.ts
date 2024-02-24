import { Router } from "express";

import { authController } from "./auth.controller.js";

export const authRouter = Router();

authRouter.get("/", authController.authenticate);
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
