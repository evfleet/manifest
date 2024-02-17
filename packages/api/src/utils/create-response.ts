type SuccessResponse = {
  status: "success";
  data?: any;
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

export function createSuccessResponse(data?: any): SuccessResponse {
  return {
    status: "success",
    data,
  };
}

export function createFailResponse(data: any): FailResponse {
  return {
    status: "fail",
    data,
  };
}

export function createErrorResponse(
  message: string,
  data?: any,
  code?: number
): ErrorResponse {
  return {
    status: "error",
    message,
    data,
    code,
  };
}
