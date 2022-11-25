import mongoose, { connection } from "mongoose";
import UserModel from "./Models/User";

export default async function Connection() {
  await mongoose.connect(process.env.MONGODB_URL);

  // const model = await UserModel.find({});
  // console.log(model);
  // return model;
}

connection.on("connected", () => {
  console.log("Conectado ala base de datos mongodb");
});

connection.on("error", (err) => {
  console.log(err);
});
