import { NextFunction, Request, Response } from "express";

import boardService from "./board.service";

const getBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await boardService.getBoardById("1");

    return res.json(result);
  } catch (err) {
    next(err);
  }
};

export default {
  getBoard,
};
