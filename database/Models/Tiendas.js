import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Tiendas = new Schema({
  _id: String,
  nombre: String,
  comidas: Array,
  ubicacion: Object,
});

const TiendasModel = mongoose.model("Tiendas", Tiendas);

export default TiendasModel;
