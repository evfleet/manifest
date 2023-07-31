import { InferModel } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const boards = pgTable("boards", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  public_id: text("public_id").unique().notNull(),
});

export type Board = InferModel<typeof boards>;
