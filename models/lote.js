import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lote = new Schema({
  nombre: { type: String, unique: true, required: true },
  presupuesto: { type: Number, required: true },
  estado:{type: Boolean, default:1},
});


export default mongoose.model("lote", lote);
