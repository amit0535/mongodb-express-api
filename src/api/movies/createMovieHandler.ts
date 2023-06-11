import { Movie } from "@/models";

export default async function createMovieHandler({ name, releaseYear }) {
  return await Movie.create({
    name: "Avatar: The Way of Water",
    releaseYear: 2023,
    rating: 8,
  });
}
