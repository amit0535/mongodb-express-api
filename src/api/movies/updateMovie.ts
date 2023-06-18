import { Movie } from "@/models";

export default async function updateMovie(id: string, body: any) {
  return await Movie.findByIdAndUpdate(id, body, { new: true });
}
