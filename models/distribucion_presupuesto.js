import mongoose from "mongoose"

const Dispresupuesto = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        presupuestoDisponible: {type: Number},
        id_lote: {type:mongoose.Schema.Types.ObjectId, ref:'Lote', require:true},
        id_item: {type:mongoose.Schema.Types.ObjectId, ref:'ItemsPresupuesto', require:true},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Dispresupuesto", Dispresupuesto)