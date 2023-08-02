import { InferModel, relations } from "drizzle-orm";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export type Board = InferModel<typeof boards>;

export const boards = pgTable("boards", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
});

export const boardsRelations = relations(boards, ({ many }) => ({
  lists: many(lists),
}));

export type List = InferModel<typeof lists>;

export const lists = pgTable("lists", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  position: integer("position").notNull(),
  boardId: text("board_id")
    .notNull()
    .references(() => boards.id, {
      onDelete: "cascade",
    }),
});

export const listsRelations = relations(lists, ({ one, many }) => ({
  board: one(boards, {
    fields: [lists.boardId],
    references: [boards.id],
  }),
  cards: many(cards),
}));

export type Card = InferModel<typeof cards>;

export const cards = pgTable("cards", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  position: integer("position").notNull(),
  listId: text("list_id")
    .notNull()
    .references(() => lists.id, {
      onDelete: "cascade",
    }),
});

export const cardsRelations = relations(cards, ({ one }) => ({
  list: one(lists, {
    fields: [cards.listId],
    references: [lists.id],
  }),
}));
