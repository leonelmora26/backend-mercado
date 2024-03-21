import mongoose from "mongoose"

const Distribucion_red_area = new mongoose.Schema(
    {
        Presupuesyo_Asignado:{type:Number,require:true},
        Presupuesyo_Actual:{type:Number,require:true},
        idArea:{type:mongoose.Schema.Types.ObjectId, ref:'area', require:true},
        idRedconocimiento:{type:mongoose.Schema.Types.ObjectId, ref:'red', require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Distribucion_red_area", Distribucion_red_area)