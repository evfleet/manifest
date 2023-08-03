import { Router } from "express";

import boardController from "./board.controller";

const boardRouter = Router();

boardRouter.post("/", boardController.createBoard);
boardRouter.get("/:boardId", boardController.getBoard);

export default boardRouter;
