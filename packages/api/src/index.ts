import http from "http";

import app from "./app";

const start = () => {
  const server = http.createServer(app);
  const port = 8081;

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

start();
