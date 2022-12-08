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
    horario: String,
    calificacion: Number,
    imagen: String,
    Categorias: [{ type: Schema.Types.ObjectId, ref: "Categorias" }],
    descripcion: String,
    comidas: [ComidaSchema],
    localizacion: { altitud: Number, longitud: Number },
    Comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  },
  { versionKey: false }
);

const TiendasModel =
  mongoose.models.Tiendas || mongoose.model("Tiendas", Tiendas);

export default TiendasModel;
