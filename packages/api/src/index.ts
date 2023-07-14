import http from "http";

import app from "./app";
import logger from "./config/logger";

const start = () => {
  const server = http.createServer(app);
  const port = 8081;

  server.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
};

start();
