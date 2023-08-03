import { eq } from "drizzle-orm";

import database from "@/database";
import { Board, boards, lists } from "@/database/schema";
import nanoid from "@/lib/nanoid";

const create = async ({ name }: Omit<Board, "id">) => {
  const result = await database.transaction(async (tx) => {
    const [board] = await tx
      .insert(boards)
      .values({
        id: nanoid(),
        name,
      })
      .returning();

    const defaultLists = await tx
      .insert(lists)
      .values([
        {
          id: nanoid(),
          name: "To Do",
          position: 0,
          boardId: board.id,
        },
        {
          id: nanoid(),
          name: "Doing",
          position: 1,
          boardId: board.id,
        },
        {
          id: nanoid(),
          name: "Done",
          position: 2,
          boardId: board.id,
        },
        {
          id: nanoid(),
          name: "Backlog",
          position: 3,
          boardId: board.id,
        },
      ])
      .returning({
        id: lists.id,
        name: lists.name,
      });

    return {
      ...board,
      lists: defaultLists,
    };
  });

  return result;
};

const getById = async (id: string) => {
  return database.query.boards.findFirst({
    where: eq(boards.id, id),
    with: {
      lists: true,
    },
  });
};

export default {
  create,
  getById,
};
