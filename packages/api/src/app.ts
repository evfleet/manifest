import cors from "cors";
import express from "express";
import { verifyRequestOrigin } from "lucia";
import { pinoHttp } from "pino-http";

import { auth } from "./config/auth.js";
import { logger } from "./config/logger.js";
import { errorHandler } from "./middleware/error-handler.js";
import { authRouter } from "./modules/auth/auth.router.js";

export async function build() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pinoHttp({
      logger,
      autoLogging: process.env.NODE_ENV !== "test",
    })
  );

  app.use((req, res, next) => {
    if (req.method === "GET") {
      return next();
    }

    const hostHeader = req.headers.host ?? null;
    const originHeader = (req.headers["x-forwarded-host"] as string) ?? null;

    if (
      !originHeader ||
      !hostHeader ||
      !verifyRequestOrigin(originHeader, [hostHeader])
    ) {
      return res.status(403).end();
    }
  });

  app.use(async (req, res, next) => {
    const sessionId = auth.readSessionCookie(req.headers.cookie ?? "");

    if (!sessionId) {
      res.locals.user = null;
      res.locals.session = null;
      return next();
    }

    const { session, user } = await auth.validateSession(sessionId);

    if (session && session.fresh) {
      res.appendHeader(
        "Set-Cookie",
        auth.createSessionCookie(session.id).serialize()
      );
    }

    if (!session) {
      res.appendHeader(
        "Set-Cookie",
        auth.createBlankSessionCookie().serialize()
      );
    }

    res.locals.user = user;
    res.locals.session = session;

    return next();
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/auth", authRouter);

  app.use(errorHandler);

  return app;
}
