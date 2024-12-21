export interface SuccessResponse<Data> {
  data: Data;
}

export interface ErrorResponse {
  error: {
    message: string | string[];
    statusCode: number;
    meta?: Record<string, unknown>;
  };
}

export type CommonResponse<T> = SuccessResponse<T> | ErrorResponse;
