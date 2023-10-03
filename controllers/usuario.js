import bcryptjs from "bcryptjs"
import { generarJWT } from "../middelwares/validar.js"
import Usuario from "../models/usuario.js";
import {validarJWT} from "../middelwares/validar.js";

const httpusuario = {
login: async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const usuarios = await Usuario.findOne({ usuario })
        if (!usuarios) {
            return res.status(400).json({
                msg: "usuarios / Password no son correctos"
            })
        }

        if (usuarios.estado === 0) {
            return res.status(400).json({
                msg: "usuarios Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuarios.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: "contraseña no son correctos"
            })
        }

        const token = await generarJWT(usuarios.id);

        res.json({
            usuarios,
            token
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
}
}

export default httpusuario