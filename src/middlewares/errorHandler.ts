import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.json({ success: false, message: error.message });
}
