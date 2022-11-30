import { cache } from "react";
import CategoriasModel from "../Models/Categorias";
import CommentsModel from "../Models/Comments";
import TiendasModel from "../Models/Tiendas";
import UserModel from "../Models/User";

const TiendasQuery = {
  TiendasAll: async () => {
    return await TiendasModel.find({});
  },
  TiendasById: function (id) {
    return TiendasModel.findById(id);
  },
  TiendasBySlug: function (slug) {
    return TiendasModel.find({ slug: slug });
  },
  TiendasBySlugCache: cache(async (slug) => {
    const tienda = await TiendasModel.findOne({ slug: slug });
    return tienda;
  }),
  TiendasBySlugCacheAndComments: cache(async (slug) => {
    const tienda = await TiendasModel.find({ slug })
      .populate({
        path: "Comments",
        /**
         * * pasar como otro objeto para relacionar con tres tablas
         * * en la key populated y pasar la tabla o modelo
         */
        populate: { path: "User", select: "Nombre" },
      })
      .populate("Categorias");
    return tienda;
  }),
  TiendasAllAndCategory: TiendasModel.find().populate("Categorias"), //obtiene todas la tiendas con las categorias
};

export default TiendasQuery;
