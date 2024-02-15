import Sqlite from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const db = new Sqlite(path.join(process.cwd(), "./database/manifest.sqlite"));
const schema = fs.readFileSync(
  path.join(process.cwd(), "./database/schema.sql"),
  "utf8"
);

db.exec(schema);

export { db };
