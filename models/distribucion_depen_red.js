import mongoose from "mongoose";

const distribucion_depen_red = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        presupuestoDisponible: {type: Number},
        iddistribuciondependencia: {type:mongoose.Schema.Types.ObjectId, ref:'Disdependencia', require:true},
        idred: {type:mongoose.Schema.Types.ObjectId, ref:'Red', require:true},
        año: {type: Date, require:true},
        estado : { type: Boolean, default:1}
    }
)

export default mongoose.model("Distribucion_depen_red", distribucion_depen_red)