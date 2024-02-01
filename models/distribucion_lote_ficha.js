import mongoose from "mongoose";

const Distribucion_lote_ficha = new mongoose.Schema(
    {
        presupuesto: {type: String, require:true},
        ficha: {type: String, require:true},
        iddistribucion_presupuesto: {type:mongoose.Schema.Types.ObjectId, ref:'distribucion_presupuesto', require:true},
        estado : { type: Number, default:1}
    }
)

export default mongoose.model("Distribucion_lote_ficha", Distribucion_lote_ficha)