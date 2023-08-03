import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import boardService from "./board.service";
import boardValidations from "./board.validations";

const createBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = boardValidations.createBoardSchema.parse(req);
    const result = await boardService.create(body);

    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const getBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = boardValidations.getBoardSchema.parse(req);
    const result = await boardService.getById(params.boardId);

    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    next(err);
  }
};

export default {
  createBoard,
  getBoard,
};
