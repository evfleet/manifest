type APIStatus = "success" | "fail" | "error";

type APIParams = {
  status: APIStatus;
  message?: string;
  data?: any;
  code?: number;
};

type SuccessResponse = {
  status: "success";
  data: any;
};

type FailResponse = {
  status: "fail";
  data: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
  data?: any;
  code?: number;
};

export type APIResponse = SuccessResponse | FailResponse | ErrorResponse;

export function createResponse({
  status,
  data,
  message,
  code,
}: APIParams): APIResponse {
  switch (status) {
    case "success":
      return {
        status,
        data,
      };
    case "fail":
      return {
        status,
        data,
      };
    case "error":
      if (!message) {
        throw new Error("Error message is required");
      }

      return {
        status,
        message,
        data,
        code,
      };
  }
}
