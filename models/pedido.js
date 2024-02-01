import mongoose from "mongoose"

const Pedido = new mongoose.Schema(
    {
        fechacreacion: {type: Date, default:Date.now},
        fechaentrega: {type: Date, requiere:true},
        idDistribucionLoteFicha: {type:mongoose.Schema.Types.ObjectId,ref:'distribucion_lote_ficha', require:true},
        idInstructorEncargado: {type:mongoose.Schema.Types.ObjectId,ref:'Usuario', require:true},
        Subtotal: {type:Number, require:true},
        Total: {type: Number, require:true},
        Estado: {type: Boolean, default:1},
        createAd: {type:Date, default:Date.now},

    }
)


export default mongoose.model("Pedido", Pedido)