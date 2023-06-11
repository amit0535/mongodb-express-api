import { Request, Response } from "express";

export default function routeNotFoundHandler(
  req: Request,
  res: Response
): void {
  res.status(404).json({ success: false, message: "Route not found" });
}
