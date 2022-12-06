import Connection from "../../../database/connect";
import TiendasModel from "../../../database/Models/Tiendas";
import UserModel from "../../../database/Models/User";
import TiendasQuery from "../../../database/Queryes/TiendasQuery";
import mongoose from "mongoose";
async function getPost(slug) {
  //conexion ala base de datos
  await Connection();
  // let tienda1 = await TiendasQuery.TiendasBySlug(slug);
  // console.log(tienda1);
  // return tienda;
  //let tiendas = await TiendasModel.find({});
  // let tiendas = await TiendasModel.create({
  //   _id: new mongoose.Types.ObjectId(),
  //   nombre: "tienda 2",
  //   slug: "tienda-2",
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
  const tienda = await TiendasQuery.TiendasBySlugCache(slug);
  console.log(tienda);

  return tienda.nombre;
  //console.log(tiendas);
  //console.dir(JSON.stringify(tiendas));
  // let tiendas = await UserModel.find({});
  // console.log(tiendas);
}

export default async function Head({ params }) {
  const nombre = await getPost(params.tiendas);
  //const message = `${tienda.name}`;
  return (
    <>
      <title>{nombre}</title>
    </>
  );
}
