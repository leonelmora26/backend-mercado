import mongoose from "mongoose"

const Entrada = new mongoose.Schema(
    {
        cantidad: { type: Number, required: true },
        total: {type: Number, require:true},
        idProductoo:{type:mongoose.Schema.Types.ObjectId, ref:'producto', require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Entrada", Entrada)