import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";

import { sqlite } from "../database/database.js";

const adapter = new BetterSqlite3Adapter(sqlite, {
  user: "user",
  session: "session",
});

export const auth = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof auth;
  }
}
