import "dotenv/config";
import http from "http";

import app from "./app";
import logger from "./config/logger";

const start = async () => {
  try {
    const server = http.createServer(app);
    const port = 8081;

    server.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

start();
