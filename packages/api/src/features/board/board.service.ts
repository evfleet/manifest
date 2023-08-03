import { Board } from "@/database/schema";
import boardRepository from "./board.repository";

const createBoard = async (params: Omit<Board, "id">) => {
  return boardRepository.createBoard(params);
};

const getBoardById = async (id: string) => {
  return boardRepository.getBoardById(id);
};

const updateBoard = async (id: string, params: Omit<Board, "id">) => {
  return boardRepository.updateBoard(id, params);
};

const deleteBoard = async (id: string) => {
  return boardRepository.deleteBoard(id);
};

export default {
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard,
};
