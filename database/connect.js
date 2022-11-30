import mongoose, { connection } from "mongoose";
import TiendasModel from "./Models/Tiendas";
import UserModel from "./Models/User";

export default async function Connection() {
  await mongoose.connect(process.env.MONGODB_URL);
}

connection.on("connected", () => {
  console.log("Conectado ala base de datos mongodb");
});

connection.on("error", (err) => {
  console.log(err);
});
