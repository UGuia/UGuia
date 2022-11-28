import mongoose, { connection } from "mongoose";
import TiendasModel from "./Models/Tiendas";
import UserModel from "./Models/User";

export default async function Connection() {
  await mongoose.connect(process.env.MONGODB_URL);

  // const model = await UserModel.find({}).exec((err, story) => {
  //   if (err) return handleError(err);
  //   console.log("The author is %s", story.name);
  //   // prints "The author is Bob Smith"
  // });
  //console.log(model);
  // const value = await TiendasModel.find({});
  // console.log(value);
  // return model;
  //mongo.fi
}

connection.on("connected", () => {
  console.log("Conectado ala base de datos mongodb");
});

connection.on("error", (err) => {
  console.log(err);
});
