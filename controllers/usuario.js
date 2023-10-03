import bcryptjs from "bcryptjs"
import { generarJWT } from "../middelwares/validar.js"
import usuario from "../models/usuario.js";

const httpusuario = {
login: async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const vendedor = await Usuario.findOne({ usuario })
        if (!vendedor) {
            return res.status(400).json({
                msg: "vendedor / Password no son correctos"
            })
        }

        if (vendedor.estado === 0) {
            return res.status(400).json({
                msg: "vendedor Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, vendedor.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: "contraseña no son correctos"
            })
        }

        const token = await generarJWT(vendedor.id);

        res.json({
            vendedor,
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