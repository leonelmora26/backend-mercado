import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ficha = new Schema({
  codigo_ficha: { type: Number, require: true, maxlength: 7 },
  nombre: { type: String, unique:true, require: true},
  nivel_de_formacion: {type: String, require: true},
  fecha_inicio: { type: Date, default: Date.now },
  ficha_fin: { type: Date, default: Date.now },
  estado : { type: Boolean, default:1},
});

export default mongoose.model("ficha", ficha);