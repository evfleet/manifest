import {
  createErrorResponse,
  createFailResponse,
  createSuccessResponse,
} from "./create-response.js";

describe("API Response Utils", () => {
  describe("createSuccessResponse", () => {
    it("should create a success response with data", () => {
      const data = { user: "Soandso" };
      const response = createSuccessResponse({ data });
      expect(response.status).toBe("success");
      expect(response.data).toBe(data);
    });

    it("should create a success response without data", () => {
      const response = createSuccessResponse();
      expect(response.status).toBe("success");
      expect(response.data).toBeUndefined();
    });
  });

  describe("createFailResponse", () => {
    it("should create a fail response with data", () => {
      const data = { username: "An username is required" };
      const response = createFailResponse({ data });
      expect(response.status).toBe("fail");
      expect(response.data).toBe(data);
    });
  });

  describe("createErrorResponse", () => {
    it("should create an error response with just a message", () => {
      const message = "Unexpected server error!";
      const response = createErrorResponse({ message });
      expect(response.status).toBe("error");
      expect(response.message).toBe(message);
    });

    it("should create an error response with message and data", () => {
      const message = "Unexpected server error!";
      const data = { code: 500 };
      const response = createErrorResponse({ message, data });
      expect(response.status).toBe("error");
      expect(response.message).toBe(message);
      expect(response.data).toBe(data);
    });

    it("should create an error response with message, data, and code", () => {
      const message = "Unexpected server error!";
      const data = { message: "The hamster went missing" };
      const code = 500;
      const response = createErrorResponse({ message, data, code });
      expect(response.status).toBe("error");
      expect(response.message).toBe(message);
      expect(response.data).toBe(data);
      expect(response.code).toBe(code);
    });
  });
});
