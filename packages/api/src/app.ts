import express from "express";
import pino from "pino-http";

import { boardRouter } from "./features/board";
import logger from "./lib/logger";

const app = express();

app.use(pino({ logger }));

app.use("/board", boardRouter);

export default app;
