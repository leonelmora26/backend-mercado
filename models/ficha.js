import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ficha = new Schema({
  codigo_ficha: { type: Number, require: true, maxlength: 7 },
  nombre: { type: String, unique:true, require: true},
  nivel_de_formacion: {type: String, require: true},
  fecha_inicio: { type: Date, require: true},
  ficha_fin: { type: Date, require: true},
  lote: {type:mongoose.Schema.Types.ObjectId, ref:'Lote', require:true},
  estado : { type: Boolean, default:1},
  createAT: { type: Date, default: Date.now}
});

export default mongoose.model("ficha", ficha);