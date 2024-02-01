import mongoose from "mongoose"

const Dispresupuesto = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        id_lote: {type:mongoose.Schema.Types.ObjectId, ref:'lote', require:true},
        id_item: {type:mongoose.Schema.Types.ObjectId, ref:'items_presupuesto', require:true},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Dispresupuesto", Dispresupuesto)