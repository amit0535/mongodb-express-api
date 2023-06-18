import { routes } from "./routes";
import MovieRouteHandler from "./MovieRouteHandler";
import createMovie from "./createMovie";
import deleteMovie from "./deleteMovie";
import updateMovie from "./updateMovie";
import listMovies from "./listMovies";
import getOneMovie from "./getOneMovie";

export {
  MovieRouteHandler,
  routes as moviesRoutes,
  createMovie,
  deleteMovie,
  updateMovie,
  listMovies,
  getOneMovie,
};
