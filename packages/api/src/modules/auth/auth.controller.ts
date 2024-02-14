import { Request, Response } from "express";

import { db } from "../../config/sqlite.js";

async function authenticate(req: Request, res: Response) {
  const sql = db.prepare("SELECT Date('now')");
  const result = sql.all();

  console.log("result", result);

  res.send("Current user");
}

export default {
  authenticate,
};
