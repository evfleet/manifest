import Sqlite from "better-sqlite3";
import fs from "fs";

const db = new Sqlite("./manifest.sqlite");
const migration = fs.readFileSync("./database/schema.sql", "utf8");

db.exec(migration);
