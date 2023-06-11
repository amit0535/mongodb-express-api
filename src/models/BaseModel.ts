import mongoose from "mongoose";
const { MONGODB_USER, MONGODB_PASSWORD } = process.env;
console.log(MONGODB_PASSWORD, MONGODB_USER, { env: process.env });

mongoose
  .connect(
    `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@mongodb:27017/content`
  )
  .then(() => console.log("Connected to mongodb"));

export default class BaseModel {}
