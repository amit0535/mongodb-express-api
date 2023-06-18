import { Movie } from "@/models";

export default async function listMovies(query) {
  const { limit = 5, offset = 0 } = query;
  const movies = await Movie.find().skip(offset).limit(limit);
  const total = await Movie.countDocuments();
  return { movies, total };
}
