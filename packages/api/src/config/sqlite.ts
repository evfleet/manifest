import Sqlite from "better-sqlite3";

export const db = new Sqlite("./database/manifest.sqlite");
