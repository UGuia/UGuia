import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  _id: String,
  Nombre: String,
  email: String,
  Password: String,
});

const UserModel = mongoose.model("user", User);

export default UserModel;
