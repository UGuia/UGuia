import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({ _id: String, name: String, age: Number });

const UserModel = mongoose.model("user", User);

export default UserModel;
