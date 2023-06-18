import mongoose from "mongoose";
import { echo, id, toJSON } from "./plugins";
const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST } = process.env;
mongoose
  .connect(
    `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:27017`,
    {
      dbName: "content",
    }
  )
  .then(() => console.log("Connected to mongodb"));
mongoose.plugin(id);
mongoose.plugin(echo);
mongoose.plugin(toJSON);
