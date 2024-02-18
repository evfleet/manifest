type APIResponse = {
  status: string;
  message?: string;
  data?: any;
};

type SuccessResponse = Partial<APIResponse> & {
  status: "success";
};

type FailResponse = Partial<APIResponse> & {
  status: "fail";
};

type ErrorResponse = Partial<APIResponse> & {
  status: "error";
  code?: number;
};

export function createSuccessResponse({
  data,
}: Pick<SuccessResponse, "data"> = {}): SuccessResponse {
  return {
    status: "success",
    data,
  };
}

export function createFailResponse({
  message,
  data,
}: Pick<FailResponse, "message" | "data">): FailResponse {
  return {
    status: "fail",
    message,
    data,
  };
}

export function createErrorResponse({
  message,
  data,
  code,
}: Pick<ErrorResponse, "message" | "data" | "code">): ErrorResponse {
  return {
    status: "error",
    message,
    data,
    code,
  };
}
