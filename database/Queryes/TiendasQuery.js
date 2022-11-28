import TiendasModel from "../Models/Tiendas";

const TiendasQuery = {
  TiendasAll: TiendasModel.find({}),
  TiendasById: function (id) {
    return TiendasModel.findById(id);
  },
  TiendasBySlug: function(slug){
    return TiendasModel.find({"slug":slug})
  }
};

export default TiendasQuery;
