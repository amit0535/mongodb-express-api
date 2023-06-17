import { Movie } from "@/models";

export default async function getOneMovie(id: string) {
  const movie = await Movie.findById(id);
  return { ...movie.toJSON({ virtuals: true }) };
}
