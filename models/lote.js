import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lote = new Schema({
  nombre: { type: String, unique: true, required: true },
  codigo: { type: String, unique: true, required: true},
  estado:{type: Boolean, default:1},
  createdAT: { type: Date, default: new Date}
});


export default mongoose.model("Lote", lote);
