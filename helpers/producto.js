import Producto from "../models/producto.js";

const helpersProducto ={
    checkExistingProductCode: async (codigo, req) => {
         const existingProduct = await Producto.findOne({ codigo });

         const {_id } = req.req.body
         console.log(req.req.body);
         if (existingProduct) {
            if (existingProduct._id != _id && req.req.method === "PUT")
              throw new Error("el codigo ya esta registrado en la base de datos.");
            else if (req.req.method === "POST")
              throw new Error("el codigo ya esta registrado en la base de datos.");
          }
      
    
      }
}


export default helpersProducto