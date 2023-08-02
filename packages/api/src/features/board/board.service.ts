import { Board } from "@/database/schema";
import boardRepository from "./board.repository";

const create = async (params: Omit<Board, "id">) => {
  return boardRepository.create(params);
};

const getBoardById = async (id: string) => {
  const board = await boardRepository.getById(id);

  return board;
};

export default {
  create,
  getBoardById,
};
