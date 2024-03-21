import mongoose from "mongoose";

const Conexion_dependenica_contrato = new mongoose.Schema(
    {
        iddistribucion_depen: {type:mongoose.Schema.Types.ObjectId, ref:'Disdependencia', require:true},
        idcontrato: {type:mongoose.Schema.Types.ObjectId, ref:'ItemsPresupuesto', require:true},
        estado : { type: Boolean, default:1}
    }
)

export default mongoose.model("Conexion_dependenica_contrato", Conexion_dependenica_contrato)