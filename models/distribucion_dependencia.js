import mongoose from "mongoose"

const Disdependencia = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        presupuestoDisponible: {type: Number},
        id_dependencia: {type:mongoose.Schema.Types.ObjectId, ref:'Dependecia', require:true},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Disdependencia", Disdependencia)