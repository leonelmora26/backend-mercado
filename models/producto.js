import mongoose from "mongoose"

const Producto = new mongoose.Schema(
    {
        codigo: {type: String, require:true, unique:true},
        nombre: {type:String, require:true},
        local: {type:String,  enum : ["D1", "ARA","DolarCity","otro"],require:true},
        cantidad:{type:Number, require:true},
        unidadMedida: {type:String, enum : ["Kg", "Gr","Ml","L"], require:true},
        precioUnitario: {type:Number, require:true},
        createAd: {type:Date, default:Date.now},
    }
) 

export default mongoose.model("Producto", Producto)