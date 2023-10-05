import bcryptjs from "bcryptjs"
import { generarJWT } from "../middelwares/validar.js"
import Usuario from "../models/usuario.js";

const httpusuario = {
getusuario: async (req, res) => {
    try {
        const usuario = await Usuario.find()
        res.json({usuario})
    } catch (error) {
        res.status(400).json({error})
    }
},
getusuariocedula: async (req, res) =>{
    const { cedula } = req.params
    try {
        const usuario = await Usuario.find({ cedula })
        res.json({ usuario })
    } catch (error) {
        res.json({ error })
    }
},
/* postAgregarusuario: async (req, res) => {
    try {
        const { nombre, cedula, telefono, usuario, password, rol } = req.body
        const usuarios = new Usuario({nombre, cedula, telefono, usuario, password, rol})
        
        await usuarios.save()
        res.json({ usuarios })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

}, */
registroUsuario: async (req, res) => {
    try {
      const {
        nombre,
        cedula,
        telefono,
        usuario,
        password,
        rol,
      } = req.body;
      const usuarios = new Usuario({
        nombre,
        cedula,
        telefono,
        usuario,
        password,
        rol,
      });
      const salt = bcryptjs.genSaltSync();
      usuarios.password = bcryptjs.hashSync(password, salt);

      await usuarios.save();

      res.json({ usuarios });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
putEditarusuario: async (req, res) => {
    try {
        const { id } = req.params
        const {nombre, apellido, telefono, usuario , password} = req.body
        const usuarios = await Usuario.findByIdAndUpdate(id,{nombre, apellido, telefono, usuario , password}, { new: true })
        const salt = bcryptjs.genSaltSync();
        usuarios.password = bcryptjs.hashSync(password, salt)
        await usuarios.save()
        res.json({ usuarios })
    } catch (error) {
        res.status(400).json({ error })
    }
},
deleteusuario: async (req, res) => {
    try {
        const { id } = req.params
        const usuarios = await Usuario.findByIdAndDelete(id)
        res.json({usuarios})
    } catch (error) {
        res.status(400).json({ error })
    }
},

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
                msg: "password no son correctos"
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