import mongoose from "mongoose"

const Producto = new mongoose.Schema(
    {
        codigo: {type: String, require:true},
        nombre: {type:String, require:true},
        descripcion: {type:String, require:true},
        unidadMedida: {type:String, require:true},
        precioUnitario: {type:Number, require:true},
        iva:{type:Number, require:true},
        consumible: {type:Boolean, require:true, default:true},
        estado:{type: Boolean, default:1},
    }
)

export default mongoose.model("Producto", Producto)