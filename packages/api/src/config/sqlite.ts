import Sqlite, { Database } from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

let db: Database;

if (process.env.NODE_ENV === "test") {
  db = new Sqlite(":memory:");
} else {
  db = new Sqlite(path.join(process.cwd(), "./database/manifest.sqlite"));
}

const schema = fs.readFileSync(
  path.join(process.cwd(), "./database/schema.sql"),
  "utf8"
);

db.exec(schema);

export { db };
