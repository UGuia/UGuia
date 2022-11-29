import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ComidaSchema = new Schema(
  { nombre: String, precio: Number },
  { versionKey: false }
);

const Tiendas = new Schema(
  {
    _id: String,
    nombre: String,
    slug: String,
    calificacion: Number,
    imagen: String,
    categorias: String,
    descripcion: String,
    comidas: [ComidaSchema],
    localizacion: { altitud: Number, longitud: Number },
  },
  { versionKey: false }
);

const TiendasModel = mongoose.model("Tiendas", Tiendas);

export default TiendasModel;
