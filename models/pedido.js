import mongoose from "mongoose"

const Pedido = new mongoose.Schema(
    {
        fechacreacion: {type:Number, default:Date.now},
        fechaentrega: {type: Number, requiere:true},
        iddistribucionloteficha: {type: Number, require:true},
        Instructor_encargado:{type: String, require:true},
        Subtotal: {type:Number, require:true},
        Total: {type: Number, require:true},
        Estado_solicitud: {type: String, require:true},
        createAd: {type:Date, default:Date.now},

    }
)


export default mongoose.model("Pedido", Pedido)