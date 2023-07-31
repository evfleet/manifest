import { Router } from "express";

import boardController from "./board.controller";

const boardRouter = Router();

boardRouter.get("/:id", boardController.getBoard);
boardRouter.post("/", boardController.createBoard);

export default boardRouter;
