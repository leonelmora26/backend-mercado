import mongoose from "mongoose"

const Conexion_red_lote = new mongoose.Schema(
    {
        idLote:{type:mongoose.Schema.Types.ObjectId, ref:'lote', require:true},
        idRedconocimiento:{type:mongoose.Schema.Types.ObjectId, ref:'red', require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Conexion_red_lote", Conexion_red_lote)