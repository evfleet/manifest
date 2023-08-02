import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

import boardService from "./board.service";
import boardValidations from "./board.validations";

const createBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req as z.infer<typeof boardValidations.createBoardSchema>;
    const result = await boardService.create(body);

    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const getBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await boardService.getBoardById("1");

    return res.json(result);
  } catch (err) {
    next(err);
  }
};

export default {
  createBoard,
  getBoard,
};
