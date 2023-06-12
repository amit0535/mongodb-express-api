import { errorHandler } from "@/middlewares";
import { Router, Request, Response } from "express";
import { MovieRouteHandler } from "./";

export const routes = Router();

routes.get("/", MovieRouteHandler.getAll);
routes.post("/", MovieRouteHandler.create);
routes.get("/:id", MovieRouteHandler.getOne);

routes.get("/cities", (req: Request, res: Response) => {
  res.send("What's up doc ?!");
});
routes.use(errorHandler);
