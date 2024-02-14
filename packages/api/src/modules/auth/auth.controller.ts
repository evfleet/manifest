import { Request, Response } from "express";

function authenticate(req: Request, res: Response) {
  res.send("Current user");
}

export default {
  authenticate,
};
