import express from "express";
import { pinoHttp } from "pino-http";

import { logger } from "./config/logger.js";
import { errorHandler } from "./middleware/error-handler.js";
import { authRouter } from "./modules/auth/auth.router.js";

export async function build() {
  const app = express();

  app.use(express.json());

  app.use(
    pinoHttp({
      logger,
      autoLogging: process.env.NODE_ENV !== "test",
    })
  );

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/auth", authRouter);

  app.use(errorHandler);

  return app;
}
