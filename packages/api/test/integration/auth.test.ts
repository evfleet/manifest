import { Express } from "express";
import request from "supertest";

import { build } from "../../src/app.js";
import { createTestDatabase } from "../utils/database.js";

describe("Auth", () => {
  let app: Express;

  beforeAll(async () => {
    app = await build();
    await createTestDatabase();
  });

  describe("POST /register", () => {
    it("should register a new user", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send({ email: "test@example.com", password: "password" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ status: "success" });
    });

    it("should return false positive for existing user", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send({ email: "test@example.com", password: "password" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        status: "success",
        data: {
          message: "User already exists",
        },
      });
    });

    it("should return 400 for invalid input", async () => {
      const response = await request(app).post("/auth/register").send({});

      expect(response.status).toBe(400);
      expect(response.body.status).toEqual("fail");
      expect(response.body.data).toBeTruthy();
    });
  });

  describe("POST /login", () => {
    it("should login a user", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ email: "test@example.com", password: "password" });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: "success" });
    });

    it("should return 401 for invalid email", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ email: "example@example.com", password: "password" });

      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        status: "fail",
        message: "Invalid email or password",
      });
    });

    it("should return 401 for invalid password", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ email: "test@example.com", password: "wrongpassword" });

      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        status: "fail",
        message: "Invalid email or password",
      });
    });

    it("should return 400 for invalid input", async () => {
      const response = await request(app).post("/auth/login").send({});

      expect(response.status).toBe(400);
      expect(response.body.status).toEqual("fail");
      expect(response.body.data).toBeTruthy();
    });
  });
});
