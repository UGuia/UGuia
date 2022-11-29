import mongoose from "mongoose";
import Connection from "../database/connect";
import TiendasModel from "../database/Models/Tiendas";
export default async function Head() {
  await Connection();

  //TiendasModel

  /* let tiendas = await TiendasModel.create({
    _id: new mongoose.Types.ObjectId(),
    nombre: "tienda 2",
    slug: "tienda-2",
    horario: "8am - 6pm",
    imagen: "243341.png",
    comidas: [
      {
        nombre: "pizza",
        precio: 20,
      },
      {
        nombre: "perro caliente",
        precio: 15,
      },
    ],
    descripcion: "ejemplo de una descripcion breve",
    localizacion: {
      altitud: 19.8,
      longitud: 8.1,
    },
  });
  console.log(tiendas); */
  return (
    <>
      <title>Tiendas</title>
    </>
  );
}
