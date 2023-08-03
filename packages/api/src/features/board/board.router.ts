import { Router } from "express";

import boardController from "./board.controller";

const boardRouter = Router();

boardRouter.post("/", boardController.createBoard);
boardRouter.get("/:boardId", boardController.getBoard);
boardRouter.patch("/:boardId", boardController.updateBoard);
boardRouter.delete("/:boardId", boardController.deleteBoard);

export default boardRouter;
