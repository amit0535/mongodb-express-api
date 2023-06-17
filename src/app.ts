import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import { moviesRoutes } from "./api/movies";
import {
  responseHandler,
  errorHandler,
  routeNotFoundHandler,
} from "./middlewares";
import { songsRoutes } from "./api/songs";
const app: Express = express();
app.use(express.json());
app.use(responseHandler);
app.use("/api/movies", moviesRoutes);
app.use("/api/songs", songsRoutes);
app.get("/api/config", (req: Request, res: Response) => {
  res.json({ success: true, env: process.env });
});
app.use(routeNotFoundHandler);
app.use(errorHandler);
process.on("SIGINT", function () {
  console.log("Exiting");
  process.exit(0);
});
export default app;
