import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import TiendasModel from "../../../database/Models/Tiendas";
import Connection from "../../../database/connect";
import CommentsModel from "../../../database/Models/Comments";

export default async function valoracion(req, res) {
  const { method, query } = req;

  switch (method) {
    case "POST":
      await Connection();
      const tienda = await TiendasModel.findOne({ slug: query.tiendas });
      console.log(query.tiendas);

      const token1 = JSON.parse(JSON.stringify(req.headers.cookie));

      const js = token1.data;

      //return res.status(200).json({ error: "nskjd", data: js.split("token=") });
      if (!tienda) return res.status(404).json({ error: "No existe tienda" });

      const token = req.headers.authorization;

      const decodeToken = jwt.decode(token.split(" ")[1]);

      const comentario = await CommentsModel.create({
        _id: new mongoose.Types.ObjectId(),
        User: decodeToken.id,
        comentario: req.body.comentario,
        fecha: req.body.fecha,
        valoracion: req.body.valoracion,
      });

      TiendasModel.updateOne(
        { slug: query.tiendas },
        { $push: { Comments: comentario._id } },
        (err, tienda) => {
          err ? console.error(err) : console.log(tienda);
        }
      );

      res
        .status(200)
        .json({ error: null, data: { message: "se creo el comentario." } });
      return;

    default:
      return res.status(400).json({ error: "Not Found" });
  }
}
