import { db } from "../../config/sqlite.js";
import { RegisterInput } from "./auth.validations.js";

async function register({ email, password }: RegisterInput) {
  const sql = db.prepare(
    "INSERT INTO users (email, hashed_password) VALUES (?, ?)"
  );
  const result = await sql.run(email, password);

  if (result.changes === 0) {
    throw new Error("Failed to register user");
  }

  return;
}

export default {
  register,
};
