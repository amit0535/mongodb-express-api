import BaseModel from "./BaseModel";
import { Schema, model } from "mongoose";

const songSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
  hidden: Boolean,
});
class Song extends BaseModel {}
songSchema.loadClass(Song);

export default model("Song", songSchema);
