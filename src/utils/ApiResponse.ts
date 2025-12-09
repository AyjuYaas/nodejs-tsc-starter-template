import { Response } from "express";

class ApiResponse {
  constructor(
    public success: boolean,
    public message: string,
    public data?: any,
    public statusCode: number = 200
  ) {}

  send(res: Response) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }

  // Helper methods for common responses
  static success(
    res: Response,
    message: string,
    data?: any,
    statusCode: number = 200
  ) {
    return new ApiResponse(true, message, data, statusCode).send(res);
  }

  static created(res: Response, message: string, data?: any) {
    return new ApiResponse(true, message, data, 201).send(res);
  }
}

export default ApiResponse;
