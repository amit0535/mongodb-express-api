import mongoose from "mongoose";
const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST } = process.env;
mongoose
  .connect(
    `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:27017`,
    {
      dbName: "content",
    }
  )
  .then(() => console.log("Connected to mongodb"));

export default class BaseModel {}
