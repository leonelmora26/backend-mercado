import mongoose from "mongoose"

const usuario = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        apellido: {type:String, require: true},
        cedula: {type:String, require:true},
        telefono: {type:String, require:true},
        usuario: {type:String, require:true},
        password: {type:String, require:true},
        estado:{type:String, default:"1"},
        createAd: {type:Date, default:Date.now},
    }
)

export default mongoose.model("usuario", usuario)