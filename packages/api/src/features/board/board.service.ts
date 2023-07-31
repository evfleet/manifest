import database from "@/database";
import boardRepository from "./board.repository";

const create = async () => {
  const board = await database.transaction(async (tx) => {
    const result = await boardRepository.create({}, tx);

    return result;
  });

  return board;
};

const getBoardById = async (id: string) => {
  const board = await boardRepository.getById(id);

  return board;
};

export default {
  create,
  getBoardById,
};
