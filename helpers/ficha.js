import ficha from "../models/ficha.js";

const helpersFicha ={
    checkExistingFichatCode: async (codigo_ficha, req) => {
         const existingFicha = await ficha.findOne({ codigo_ficha });

         const {_id } = req.req.body
         console.log(req.req.body);
         if (existingFicha) {
            if (existingFicha._id != _id && req.req.method === "PUT")
              throw new Error("el codigo de la ficha ya esta registrado en la base de datos.");
            else if (req.req.method === "POST")
              throw new Error("el codigo de la ficha ya esta registrado en la base de datos.");
          }
      
    
      }
}


export default helpersFicha