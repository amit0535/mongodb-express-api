import { Movie } from "@/models";

export default async function deleteMovie(id: string) {
  await Movie.deleteOne({ _id: id });
}
