import mongoose from "mongoose";
import Connection from "../database/connect";
import CategoriasModel from "../database/Models/Categorias";
import CommentsModel from "../database/Models/Comments";
import TiendasModel from "../database/Models/Tiendas";
import UserModel from "../database/Models/User";
import TiendasQuery from "../database/Queryes/TiendasQuery";
import PwaHead from "../components/pwaHead";

export default async function Head() {
  await Connection();

  //TiendasModel
  /* const categorias = CategoriasModel.create({
    _id: new mongoose.Types.ObjectId(),
    nombre: "antojitos",
  });

  const save = TiendasModel.updateOne(
    { _id: "6385917db0079a1936499ce9" },
    { Categorias: await categorias },
    (err, tienda) => {
      err ? console.error(err) : console.log(tienda);
    }
  );

  console.log(save); */

  /* const use = UserModel.create({
    _id: new mongoose.Types.ObjectId(),
    Nombre: "efrain",
    email: "efrain@gmail.com",
    Password: "123456",
  });

  const comments = CommentsModel.create({
    _id: new mongoose.Types.ObjectId(),
    User: await use,
    comentario: "hola",
    fecha: new Date(),
  });

  const save = TiendasModel.updateOne(
    { _id: "6385917db0079a1936499ce9" },
    { Comments: await comments },
    (err, tienda) => {
      err ? console.error(err) : console.log(tienda);
    }
  );

  console.log(save); */
  /* const tienda = await TiendasModel.find().populate("Categorias");
  console.log(tienda);
  console.log(JSON.stringify(tienda)); */

  const tienda = await TiendasQuery.TiendasBySlugCacheAndComments("tienda-2");
  console.log(tienda);

  //console.log(TiendasQuery.TiendasBySlugCacheAndComments("tienda-2"));
  /* const tienda = await CommentsModel.find().populate("User");
  console.log(tienda);
  console.log(JSON.stringify(tienda)); */

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
      <PwaHead></PwaHead>
      {/* <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo.ico"></link>
      <meta name="theme-color" content="#fff" /> */}
    </>
  );
}
