import Sqlite, { Database as SqliteDatabase } from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import path from "node:path";

import { Database } from "./types.js";

let sqlite: SqliteDatabase;

if (process.env.NODE_ENV === "test") {
  sqlite = new Sqlite(":memory:");
} else {
  sqlite = new Sqlite(
    path.join(process.cwd(), "./src/database/manifest.sqlite")
  );
}

const dialect = new SqliteDialect({
  database: sqlite,
});

const db = new Kysely<Database>({ dialect });

export { db, sqlite };
