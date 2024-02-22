import mongoose from "mongoose"

const Usuario = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        cedula: {type:String, require:true},
        telefono: {type:String, require:true},
        correo: {type: String, require:true},
        usuario: {type:String, require:true},
        password: {type:String, require:true},
        rol:{type:String, require:true},
        estado : { type: Boolean, default:1},
        createAd: {type:Date, default:Date.now},
    }
)

export default mongoose.model("Usuario", Usuario)