import { SqliteError } from "better-sqlite3";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";

import { auth } from "../../config/auth.js";
import {
  createFailResponse,
  createSuccessResponse,
} from "../../utils/create-response.js";
import { userRepository } from "../user/user.repository.js";
import { loginSchema, registerSchema } from "./auth.validations.js";

async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    if (!res.locals.user) {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }

    const { id, email } = res.locals.session;

    return res
      .status(StatusCodes.OK)
      .json(createSuccessResponse({ data: { id, email } }));
  } catch (err) {
    next(err);
  }
}

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = registerSchema.parse(req.body);
    const hashedPassword = await new Argon2id().hash(password);

    await userRepository.create({
      id: generateId(15),
      email,
      hashed_password: hashedPassword,
    });

    return res.status(StatusCodes.CREATED).json(createSuccessResponse());
  } catch (err) {
    if (err instanceof SqliteError && err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      // return false positive if user already exists

      return res.status(StatusCodes.CREATED).json(
        createSuccessResponse({
          data:
            process.env.NODE_ENV !== "production"
              ? { message: "User already exists" }
              : undefined,
        })
      );
    }

    next(err);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await userRepository.findByEmail(email);

    if (!user) {
      // to counter timing attacks
      await new Argon2id().hash(password);

      return res.status(StatusCodes.UNAUTHORIZED).json(
        createFailResponse({
          message: "Invalid email or password",
        })
      );
    }

    const validPassword = await new Argon2id().verify(
      user.hashed_password,
      password
    );

    if (!validPassword) {
      return res.status(StatusCodes.UNAUTHORIZED).json(
        createFailResponse({
          message: "Invalid email or password",
        })
      );
    }

    console.log("user", user);
    console.log("id type", typeof user.id);

    const session = await auth.createSession(user.id, {
      email: user.email,
    });

    return res
      .appendHeader(
        "Set-Cookie",
        auth.createSessionCookie(session.id).serialize()
      )
      .status(StatusCodes.OK)
      .json(createSuccessResponse());
  } catch (err) {
    next(err);
  }
}

async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    if (!res.locals.session) {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }

    await auth.invalidateSession(res.locals.session.id);

    return res
      .appendHeader("Set-Cookie", auth.createBlankSessionCookie().serialize())
      .status(StatusCodes.OK)
      .json(createSuccessResponse());
  } catch (err) {
    next(err);
  }
}

export const authController = {
  authenticate,
  register,
  login,
  logout,
};
