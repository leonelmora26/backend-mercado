import mongoose from "mongoose"

const Pedido = new mongoose.Schema(
    {
        fechacreacion: {type: Date, default:Date.now},
        idficha:{type:mongoose.Schema.Types.ObjectId,ref:'ficha', require:true},
        idInstructorEncargado: {type:mongoose.Schema.Types.ObjectId,ref:'Usuario', require:true},
        total: {type: Number, require:true},
        estado: {type: Boolean, default:1},
        createAd: {type:Date, default:Date.now},

    }
)


export default mongoose.model("Pedido", Pedido)