import { db } from "../../config/sqlite.js";
import { CreateUser } from "./user.validations.js";

async function create({ email, password }: CreateUser) {
  const sql = db.prepare(
    "INSERT INTO users (email, hashed_password) VALUES (?, ?)"
  );
  const result = await sql.run(email, password);

  if (result.changes === 0) {
    throw new Error("Failed to register user");
  }

  return;
}

export const userRepository = {
  create,
};
