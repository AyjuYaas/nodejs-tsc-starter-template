import { Response } from "express";

class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational: boolean = true,
    public errors?: any[],
    public code?: string
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  send(res: Response): Response {
    const response: any = {
      success: false,
      message: this.message,
      ...(this.code && { code: this.code }),
      ...(process.env.NODE_ENV === "development" && {
        errors: this.errors,
        stack: this.stack,
      }),
    };

    return res.status(this.statusCode).json(response);
  }

  // Helper methods for common errors
  static badRequest(
    res: Response,
    message: string = "Bad Request",
    errors?: any[]
  ) {
    return new ApiError(400, message, true, errors).send(res);
  }

  static unauthorized(res: Response, message: string = "Unauthorized") {
    return new ApiError(401, message).send(res);
  }

  static notFound(res: Response, message: string = "Not Found") {
    return new ApiError(404, message).send(res);
  }

  static internal(res: Response, message: string = "Internal Server Error") {
    return new ApiError(500, message).send(res);
  }

  static invalid(res: Response, message: string = "Invalid request") {
    return new ApiError(401, message).send(res);
  }
}

export default ApiError;
