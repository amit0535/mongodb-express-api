import { errorHandler } from "@/middlewares";
import { Router, Request, Response } from "express";
import MovieRouteHandler from "./MovieRouteHandler";

export const routes = Router();
routes.get("/", MovieRouteHandler.getAll);
routes.post("/", MovieRouteHandler.create);
routes.get("/:id", MovieRouteHandler.getOne);
routes.delete("/:id", MovieRouteHandler.delete);
routes.use(errorHandler);
