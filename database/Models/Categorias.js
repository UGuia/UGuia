import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Categorias = new Schema(
  {
    _id: String,
    nombre: String,
    categorias: { type: Schema.ObjectId, ref: "Categorias" },
  },
  { versionKey: false }
);

const CategoriasModel = mongoose.model("Categorias", Categorias);

export default CategoriasModel;
