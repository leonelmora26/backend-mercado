import Lote from "../models/lote.js";

const helpersLote ={
    checkExistingLotetCode: async (codigo, req) => {
         const existingLote = await Lote.findOne({ codigo });

         const {_id } = req.req.body
         console.log(req.req.body);
         if (existingLote) {
            if (existingLote._id != _id && req.req.method === "PUT")
              throw new Error("el codigo del lote ya esta registrado en la base de datos.");
            else if (req.req.method === "POST")
              throw new Error("el codigo del lote ya esta registrado en la base de datos.");
          }
      
    
      }
}


export default helpersLote