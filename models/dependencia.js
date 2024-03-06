import mongoose from "mongoose"

const Dependecia = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        codigo: {type: String, require:true},
        idcontrato:{type:mongoose.Schema.Types.ObjectId, ref:'Dependencia', require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Dependecia", Dependecia)