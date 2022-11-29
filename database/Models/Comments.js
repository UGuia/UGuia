import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comments = new Schema(
  {
    _id: String,
    id_user: String,
    comentario: String,
    fecha: Date,
  },
  { versionKey: false }
);

const CommentsModel = mongoose.model("Comments", Comments);

export default CommentsModel;
