import { Request, Response } from "express";
import createMovie from "./createMovie";
export default class MovieRouteHandler {
  static async create(req: Request, res: Response) {
    return await createMovie(req.query);
  }
  static async getAll(req: Request, res: Response) {
    res.json({ movies: [] });
  }
  static async getOne(req: Request, res: Response) {
    const { operator, ...params } = req.query;
  }
}
console.log({ atClass: MovieRouteHandler });
