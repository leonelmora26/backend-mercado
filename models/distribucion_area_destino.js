import mongoose from "mongoose"

const Distribucion_area_destino = new mongoose.Schema(
    {
        Presupuesto_Asignado:{type:Number,require:true},
        Presupuesto_Actual:{type:Number,require:true},
        idAreaTematica:{type:mongoose.Schema.Types.ObjectId, ref:'area', require:true},
        idDestino:{type:mongoose.Schema.Types.ObjectId, ref:'ficha', require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Distribucion_area_destino", Distribucion_area_destino)