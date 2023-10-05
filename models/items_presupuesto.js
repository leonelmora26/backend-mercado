import mongoose from "mongoose"

const Items_presupuesto = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        presupuesto: {type:Number, require:true},
        año:{type:String, require:true},
        createAd: {type:Date, default:Date.now},
    }
)

export default mongoose.model("Items_presupuesto", Items_presupuesto)