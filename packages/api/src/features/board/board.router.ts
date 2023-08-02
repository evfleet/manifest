import { Router } from "express";

import validate from "@/middleware/validate";
import boardController from "./board.controller";
import boardValidations from "./board.validations";

const boardRouter = Router();

boardRouter.get("/:id", boardController.getBoard);
boardRouter.post(
  "/",
  validate(boardValidations.createBoardSchema),
  boardController.createBoard
);

export default boardRouter;
