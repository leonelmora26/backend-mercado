import mongoose from "mongoose";

const Distribucion_lote_ficha = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        presupuestoDisponible: {type: Number},
        idficha: {type:mongoose.Schema.Types.ObjectId, ref:'ficha', require:true},
        idDistribucionPresupuesto: {type:mongoose.Schema.Types.ObjectId, ref:'Dispresupuesto', require:true},
        estado : { type: Boolean, default:1}
    }
)

export default mongoose.model("Distribucion_lote_ficha", Distribucion_lote_ficha)