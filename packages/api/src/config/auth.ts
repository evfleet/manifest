import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";

import { sqlite } from "../database/database.js";

const adapter = new BetterSqlite3Adapter(sqlite, {
  user: "user",
  session: "session",
});

export const auth = new Lucia(adapter, {
  getSessionAttributes: (attributes) => {
    return {
      email: attributes.email,
    };
  },
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

interface DatabaseSessionAttributes {
  email: string;
}

declare module "lucia" {
  interface Register {
    Lucia: typeof auth;
    DatabaseSessionAttributes: DatabaseSessionAttributes;
  }
}
