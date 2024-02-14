import express from "express";
import { pinoHttp } from "pino-http";

import { logger } from "./config/logger.js";
import { authRouter } from "./modules/auth/auth.router.js";

export async function build() {
  const app = express();

  app.use(pinoHttp({ logger }));

  app.use("/auth", authRouter);

  return app;
}
