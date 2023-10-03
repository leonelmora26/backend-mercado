import mongoose from "mongoose";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ficha = new Schema({
  codigo_ficha: { type: Number, require: true, maxlength: 6 },
  nombre: { type: String, unique:true, require: true, minlength:7, maxlength: 10 },
  nivel_de_formacion: {type: String, require: true},
  fecha_inicio: { type: Date, default: Date.now },
  ficha_fin: { type: Date, default: Date.now },
  estado : { type: Number, default:1},
});

export default mongoose.model("ficha", ficha);