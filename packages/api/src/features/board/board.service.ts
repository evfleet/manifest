import boardRepository from "./board.repository";

const getBoardById = async (id: string) => {
  const board = await boardRepository.getBoardById(id);

  return board;
};

export default {
  getBoardById,
};
