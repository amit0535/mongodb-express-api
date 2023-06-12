import { Movie } from "@/models";

export default async function createMovie(query) {
  const { name, releaseYear, rating } = query;
  return await Movie.create({ name, releaseYear, rating });
}
