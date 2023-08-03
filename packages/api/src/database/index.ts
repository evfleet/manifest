import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL as string;
const queryClient = postgres(databaseUrl, {
  ssl: true,
});
const database = drizzle(queryClient, { schema });

export default database;
