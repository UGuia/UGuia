import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  _id: String,
  Nombre: String,
  email: String,
  Password: String,
  telefono: String,
});

const UserModel = mongoose.models.User || mongoose.model("User", User);

export default UserModel;
