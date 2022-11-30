import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Categorias = new Schema(
  {
    _id: String,
    nombre: String,
    Tiendas: { type: Schema.Types.ObjectId, ref: "Tiendas" },
  },
  { versionKey: false }
);

const CategoriasModel = mongoose.model("Categorias", Categorias);

export default CategoriasModel;
