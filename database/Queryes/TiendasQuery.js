import { cache } from "react";
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
    let tiendaArr= []
    await TiendasModel.findOne({ slug: slug }, (err, tienda) => {
      const category = CategoriasModel.populate(tienda,{path:"Categorias"},(err,cat)=>{
       return cat
      })
      const comments = CommentsModel.populate(tienda, { path: "autor" }, (err, comments) => {
        UserModel.populate(comments, { path: "user" }, (err, user) => {
          return user;
        });
      });

      category.concat(comments)
      

    });
    //return tienda;
  }),
};

export default TiendasQuery;
