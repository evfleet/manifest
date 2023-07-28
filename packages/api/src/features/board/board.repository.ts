import { sql } from "drizzle-orm";

import database from "../../database";

const getBoardById = async (id: string) => {
  const result = await database.execute(sql`SELECT NOW()`);

  return result;
};

export default {
  getBoardById,
};
