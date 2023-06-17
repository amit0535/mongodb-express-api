import { Request, Response } from "express";
import createMovie from "./createMovie";
import listMovies from "./listMovies";
import getOneMovie from "./getOneMovie";
import deleteMovie from "./deleteMovie";
export default class MovieRouteHandler {
  static async create(req: Request, res: Response) {
    const movies = await createMovie(req.query);
    res.success({ movies });
  }

  static async getAll(req: Request, res: Response) {
    const movies = await listMovies(req.query);
    res.success({ movies });
  }

  static async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const movie = await getOneMovie(id);
    res.success({ movie });
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    await deleteMovie(id);
    res.success({ message: "deleted" });
  }
}
