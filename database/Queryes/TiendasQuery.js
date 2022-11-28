import { cache } from "react";
import TiendasModel from "../Models/Tiendas";

const TiendasQuery = {
  TiendasAll: TiendasModel.find({}),
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
};

export default TiendasQuery;
