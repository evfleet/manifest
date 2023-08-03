import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import boardService from "./board.service";
import boardValidations from "./board.validations";

const createBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = boardValidations.createBoardSchema.parse(req);
    const result = await boardService.createBoard(body);

    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const getBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = boardValidations.getBoardSchema.parse(req);
    const result = await boardService.getBoardById(params.boardId);

    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    next(err);
  }
};

const updateBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, params } = boardValidations.updateBoardSchema.parse(req);
    await boardService.updateBoard(params.boardId, body);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};

const deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = boardValidations.getBoardSchema.parse(req);
    await boardService.deleteBoard(params.boardId);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};

export default {
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard,
};
