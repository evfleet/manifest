import { SqliteError } from "better-sqlite3";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Argon2id } from "oslo/password";

import { createSuccessResponse } from "../../utils/create-response.js";
import { userRepository } from "../user/user.repository.js";
import { createUserSchema } from "../user/user.validations.js";

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = createUserSchema.parse(req.body);
    const hashedPassword = await new Argon2id().hash(password);

    await userRepository.create({ email, password: hashedPassword });

    return res.status(StatusCodes.CREATED).json(createSuccessResponse());
  } catch (err) {
    if (err instanceof SqliteError && err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      // return false positive if user already exists
      return res.status(StatusCodes.CREATED).json(
        createSuccessResponse(
          process.env.NODE_ENV !== "production" && {
            message: "User already exists",
          }
        )
      );
    }

    next(err);
  }
}

export const authController = {
  register,
};
