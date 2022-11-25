import TiendasModel from "../Models/Tiendas";

const TiendasQuery = {
  TiendasAll: TiendasModel.find({}),
  TiendasById: function (id) {
    return TiendasModel.findById(id);
  },
};

export default TiendasQuery;
