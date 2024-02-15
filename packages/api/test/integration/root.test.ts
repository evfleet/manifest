import { Express } from "express";
import request from "supertest";

import { build } from "../../src/app.js";

describe("Root", () => {
  let app: Express;

  beforeAll(async () => {
    app = await build();
  });

  it("GET / should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
