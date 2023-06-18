import { Request, Response } from "express";
import {
  createMovie,
  listMovies,
  getOneMovie,
  deleteMovie,
  updateMovie,
} from "./";

export default class MovieRouteHandler {
  static async create(req: Request, res: Response) {
    const movie = await createMovie(req.query);
    res.success({ movie }, 201);
  }

  static async getAll(req: Request, res: Response) {
    const { movies, total } = await listMovies(req.query);
    res.success({ movies, total });
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

  static async update(req: Request, res: Response) {
    const movie = await updateMovie(req.params.id, req.body);
    res.success({ movie });
  }
}
