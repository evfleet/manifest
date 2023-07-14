import express from "express";
import pino from "pino-http";

import logger from "./config/logger";

const app = express();

app.use(pino({ logger }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
