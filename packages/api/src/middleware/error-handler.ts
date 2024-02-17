import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import {
  createErrorResponse,
  createFailResponse,
} from "../utils/create-response.js";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).send(
      createFailResponse(
        err.errors.reduce(
          (obj, item) => ({
            ...obj,
            [item.path.join("-")]: item.message,
          }),
          {}
        )
      )
    );
  }

  return res.status(500).json(createErrorResponse("Unexpected server error"));
}
