import bcryptjs from "bcryptjs"
import { generarJWT } from "../middelwares/validar.js"
import Usuario from "../models/usuario.js";
import nodemailer from "nodemailer"


let codigoEnviado = {};

function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 1000000);
  let numero = numeroAleatorio.toString().padStart(6, "0");
  let fechaCreacion = new Date();

  codigoEnviado = { codigo: numero, fechaCreacion };

  return numero;
}
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
        const Usuario = new Usuario({nombre, cedula, telefono, usuario, password, rol})
        
        await Usuario.save()
        res.json({ Usuario })
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
      const Usuario = new Usuario({
        nombre,
        cedula,
        telefono,
        usuario,
        password,
        rol,
      });
      const salt = bcryptjs.genSaltSync();
      Usuario.password = bcryptjs.hashSync(password, salt);

      await Usuario.save();

      res.json({ Usuario });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
putEditarusuario: async (req, res) => {
    try {
        const { id } = req.params
        const {nombre, apellido, telefono, usuario , password} = req.body
        const Usuario = await Usuario.findByIdAndUpdate(id,{nombre, apellido, telefono, usuario , password}, { new: true })
        const salt = bcryptjs.genSaltSync();
        Usuario.password = bcryptjs.hashSync(password, salt)
        await Usuario.save()
        res.json({ Usuario })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putusuarioInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ usuario });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putusuarioActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ usuario });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

login: async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const Usuario = await Usuario.findOne({ usuario })
        if (!Usuario) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }

        console.log(Usuario);

        if (Usuario.estado === false) {    
            return res.status(400).json({
                msg: "Usuario Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, Usuario.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: "Usuario / password no son correctos"
            })
        }

        const token = await generarJWT(Usuario.id);

        res.json({
            Usuario,
            token
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
},


recuperarPassword: async (req, res) => {
    try {
      const { correo } = req.body;

      const usuario = await Usuario.findOne({ correo });

      if (!usuario)
        return res.status(404).json({ error: "Usuario no encontrado" });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.userEmail,
          pass: process.env.password,
        },
      });
   

      
      const  codigo = generarNumeroAleatorio()
      const mailOptions = {
        from: process.env.userEmail,
        to: correo,
        subject: "Recuperación de Contraseña",
        text:
          "Su codigo es este: " + codigo, 
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            msg: "Error al enviar el Correo electrónico.",
          });
        } else {
          console.log("Correo electrónico enviado: " + info.response);
          res.json({
            success: true,
            msg: "Correo electrónico enviado con éxito.",
          });
        }
      });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error });
    }
  },

  confirmarCodigo: async (req, res) => {
    try {
      const { codigo } = req.params;

      if (!codigoEnviado) {
        return res.status(400).json({ error: "Código no generado" });
      }

      const { codigo: codigoGuardado, fechaCreacion } = codigoEnviado;
      const tiempoExpiracion = 30; // Tiempo de expiración en minutos

      const tiempoActual = new Date();
      const tiempoDiferencia = tiempoActual - new Date(fechaCreacion);
      const minutosDiferencia = tiempoDiferencia / (1000 * 60);

      if (minutosDiferencia > tiempoExpiracion) {
        return res.status(400).json({ error: "El código ha expirado" });
      }

      if (codigo === codigoGuardado) {
        return res.json({ msg: "Código correcto" });
      }

      return res.status(400).json({ error: "Código incorrecto" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error, hable con el WebMaster",
      });
    }
  },



nuevaPassword: async (req, res) => {
    try {
      const { correo, codigo, password } = req.body;

      const { codigo: codigoGuardado, fechaCreacion } = codigoEnviado;
      const tiempoExpiracion = 30; // Tiempo de expiración en minutos

      const tiempoActual = new Date();
      const tiempoDiferencia = tiempoActual - new Date(fechaCreacion);
      const minutosDiferencia = tiempoDiferencia / (1000 * 60);

      if (minutosDiferencia > tiempoExpiracion) {
        return res.status(400).json({ error: "El código ha expirado" });
      }

      if (codigo === codigoGuardado) {
        codigoEnviado = {};

        const usuario = Usuario.findOne({correo});

        const salt = bcryptjs.genSaltSync();
        const newPassword = bcryptjs.hashSync(password, salt);

        await Usuario.findByIdAndUpdate(
          usuario.id,
          { password: newPassword },
          { new: true }
        );

        return res
          .status(200)
          .json({ msg: "Contraseña actualizada con éxito" });
      }

      return res.status(400).json({ error: "Código incorrecto" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error, hable con el WebMaster",
      });
    }
  }


}

export default httpusuario