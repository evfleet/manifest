import express from "express";
import { pinoHttp } from "pino-http";

import { logger } from "./config/logger.js";

export async function build() {
  const app = express();

  app.use(pinoHttp({ logger }));

  return app;
}
