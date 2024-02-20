import Usuario from "../models//usuario.js";

const helpersUsuario ={
    checkExistingUsuarioCode: async (cedula, req) => {
         const existingUsuario = await Usuario.findOne({ cedula });

         const {_id } = req.req.body
         console.log(req.req.body);
         if (existingUsuario) {
            if (existingUsuario._id != _id && req.req.method === "PUT")
              throw new Error("la cedula ya esta registrada en la base de datos.");
            else if (req.req.method === "POST")
              throw new Error("la cedula ya esta registrada en la base de datos.");
          }
      
    
      }
}


export default helpersUsuario