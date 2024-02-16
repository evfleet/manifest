import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { createResponse } from "../utils/create-response.js";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json(
      createResponse({
        status: "error",
        data: err.errors,
      })
    );
  }

  return res.status(500).json(
    createResponse({
      status: "error",
      message: "Unexpected server error",
    })
  );
}
