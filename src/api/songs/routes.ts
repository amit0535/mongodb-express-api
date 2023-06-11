import { errorHandler } from "@/middlewares";
import { Router, Request, Response } from "express";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.json({ songs: [] });
});
routes.get("/:id", (req: Request, res: Response) => {
  res.json({ song: {} });
});

routes.use(errorHandler);
