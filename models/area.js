import mongoose from "mongoose"

const Area = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        ficha: {type: String, require:true},
        createAd: {type:Date, default:Date.now},
    }
)

export default mongoose.model("Area", Area)