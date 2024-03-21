import mongoose from "mongoose"

const Dislote_contrato = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        presupuestoDisponible: {type: Number},
        id_contrato: {type:mongoose.Schema.Types.ObjectId, ref:'ItemsPresupuesto', require:true},
        id_lote: {type:mongoose.Schema.Types.ObjectId, ref:'Lote', require:true},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Dislote_contrato", Dislote_contrato)