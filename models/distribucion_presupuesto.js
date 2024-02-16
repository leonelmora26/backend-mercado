import mongoose from "mongoose"

const Dispresupuesto = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        lote_nombre: {type:mongoose.Schema.Types.ObjectId, ref:'lote', require:true},
        item_presupuesto: {type:mongoose.Schema.Types.ObjectId, ref:'items_presupuesto', require:true},
        item_nombre: {type:mongoose.Schema.Types.ObjectId, ref:'items_nombre', require:true},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Dispresupuesto", Dispresupuesto)