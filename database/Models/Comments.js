import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comments = new Schema(
  {
    _id: String,
    User: { type: Schema.ObjectId, ref: "user" },
    comentario: String,
    fecha: Date,
  },
  { versionKey: false }
);

const CommentsModel = mongoose.model("Comments", Comments);

export default CommentsModel;
