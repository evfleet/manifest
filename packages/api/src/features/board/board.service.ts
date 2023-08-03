import { Board } from "@/database/schema";
import boardRepository from "./board.repository";

const create = async (params: Omit<Board, "id">) => {
  return boardRepository.create(params);
};

const getById = async (id: string) => {
  return boardRepository.getById(id);
};

export default {
  create,
  getById,
};
