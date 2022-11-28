import Connection from "../../database/connect";
import TiendasModel from "../../database/Models/Tiendas";
import UserModel from "../../database/Models/User";
import TiendasQuery from "../../database/Queryes/TiendasQuery";
import mongoose from "mongoose";
async function getPost(slug) {
  // const res = await fetch("localhost:3000");
  // return res.json();
  await Connection();
  //TiendasQuery.
  //tien
  // let tienda = await TiendasQuery.TiendasBySlug(slug);
  // console.log(tienda)
  // return tienda;
  let tiendas = await TiendasModel.find({});
  // let tiendas = await TiendasModel.create({
  //   _id: new mongoose.Types.ObjectId(),
  //   nombre: "tienda 1",
  //   slug: "tienda-1",
  //   horario: "8am - 6pm",
  //   imagen: "243341.png",
  //   comidas: [
  //     {
  //       nombre: "pizza",
  //       precio: 20,
  //     },
  //     {
  //       nombre: "perro caliente",
  //       precio: 15,
  //     },
  //   ],
  //   descripcion: "ejemplo de una descripcion breve",
  //   localizacion: {
  //     altitud: 19.8,
  //     longitud: 8.1,
  //   },
  // });

  // tiendas.save((err) => {
  //   if (err) throw err;
  //   console.log("Author successfully saved.");
  // });

  console.log(tiendas);
  console.dir(JSON.stringify(tiendas));
  // let tiendas = await UserModel.find({});
  // console.log(tiendas);
}

export default async function Head({ params }) {
  await getPost(params.slug);
  //const message = `${tienda.name}`;
  return (
    <>
      <title>hola</title>
    </>
  );
}
