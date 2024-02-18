type SuccessResponse = {
  status: "success";
  data?: any;
};

type SuccessParams = {
  data?: any;
};

type FailResponse = {
  status: "fail";
  message?: string;
  data?: any;
};

type FailParams = {
  message?: string;
  data?: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
  data?: any;
  code?: number;
};

type ErrorParams = {
  message: string;
  data?: any;
  code?: number;
};

export function createSuccessResponse({
  data,
}: SuccessParams = {}): SuccessResponse {
  return {
    status: "success",
    data,
  };
}

export function createFailResponse({
  message,
  data,
}: FailParams): FailResponse {
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
}: ErrorParams): ErrorResponse {
  return {
    status: "error",
    message,
    data,
    code,
  };
}
