import { Movie } from "@/models";

export default async function getOneMovie(id: string) {
  return await Movie.findById(id);
}
