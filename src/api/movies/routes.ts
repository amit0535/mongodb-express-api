import { errorHandler } from "@/middlewares";
import { Router, Request, Response } from "express";
import { createMovieHandler } from "./";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.json({ movies: [] });
});
routes.post("/", async (req: Request, res: Response) => {
  res.json({ movie: await createMovieHandler(req.body) });
});
routes.get("/:id", (req: Request, res: Response) => {
  res.json({ movie: [] });
});

routes.get("/cities", (req: Request, res: Response) => {
  res.send("What's up doc ?!");
});
routes.use(errorHandler);
