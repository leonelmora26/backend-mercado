import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lote = new Schema({
  nombre: { type: String, unique: true, required: true },
  presupuesto: { type: Number, required: true },
  estado:{type: Boolean, default:1},
});

lote.path('presupuesto').validate(function (value) {
    // Utiliza una expresión regular para verificar si el valor es un número válido
    const validNumberRegex = /^\d+(\.\d{1,2})?$/;
    return validNumberRegex.test(value);
  }, 'El presupuesto debe ser un número válido.');

export default mongoose.model("lote", lote);
