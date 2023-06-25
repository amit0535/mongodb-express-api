import { Schema, model } from "mongoose";
import { IUser } from "@/interfaces";
import bcrypt from "bcrypt";
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, min: 6, max: 16 },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    next();
  } else {
    return next();
  }
});

userSchema.methods.isPasswordValid = function (plainPassword: string) {
  return bcrypt.compareSync(plainPassword, this.password);
};

export default model<IUser>("User", userSchema);
