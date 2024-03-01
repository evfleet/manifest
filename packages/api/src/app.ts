import cors from "cors";
import express from "express";
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
    // lucia-auth csrf protection
    // https://lucia-auth.com/guides/validate-session-cookies/express

    /*

    if (req.method === "GET") {
      return next();
    }

    // removed host headers, allowed origins instead of using the host header
    // probably needs to change for production
    const originHeader = req.headers.origin ?? null;

    if (
      !originHeader ||
      !verifyRequestOrigin(originHeader, ["http://localhost:5173"])
    ) {
      return res.status(403).end();
    }

    */

    return next();
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

  app.get("/api/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/api/auth", authRouter);

  app.use(errorHandler);

  return app;
}
