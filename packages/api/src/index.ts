import "dotenv/config";

import { build } from "./app.js";
import { logger } from "./config/logger.js";

async function start() {
  const app = await build();
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
  });
}

start();
