import bcryptjs from "bcryptjs"
import { generarJWT } from "../middelwares/validar.js"
import Usuario from "../models/usuario.js";
import nodemailer from 'nodemailer'

const codigoEnviado = {}

function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 1000000);
    let numero = numeroAleatorio.toString().padStart(6, "0");
    let fechaCreacion = new Date();
  
    codigoEnviado = { codigo: numero, fechaCreacion };
  
    return numero;
  }

const httpusuario = {
    codigoRecuperar: async (req, res) => {
        try {
          const { correo } = req.params;
    
          const codigo = generarNumeroAleatorio();
    
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.userEmail,
              pass: process.env.password,
            },
          });
    
          const mailOptions = {
            from: process.env.userEmail,
            to: correo,
            subject: "Recuperación de Contraseña",
            text: "Tu código para restablecer tu contraseña es: " + codigo,
          };
    
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
              res.status(500).json({
                success: false,
                error: "Error al enviar el correo electrónico.",
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
          const tiempoExpiracion = 60; // Tiempo de expiración en minutos
    
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
    
            const usuario = await Usuario.findOne({correo});
    
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
      },
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
putusuarioInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await usuario.findByIdAndUpdate(id, { estado: 0 }, { new: true });
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
        const usuarios = await Usuario.findOne({ usuario })
        if (!usuarios) {
            return res.status(400).json({
                msg: "usuarios / Password no son correctos"
            })
        }

        console.log(usuarios);

        if (usuarios.estado === false) {    
            return res.status(400).json({
                msg: "usuarios Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuarios.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: "usuarios / password no son correctos"
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