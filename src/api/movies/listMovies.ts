import { Movie } from "@/models";

export default async function listMovies(query) {
  const { limit } = query;
  return await Movie.find();
}
