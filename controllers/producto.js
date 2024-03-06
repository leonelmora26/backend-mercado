import Producto from "../models/producto.js";

const httpproducto = {
getproducto: async (req, res) => {
    try {
        const producto = await Producto.find()
        res.json({producto})
    } catch (error) {
        res.status(400).json({error})
    }
},
getproductoid: async (req, res) =>{
    const { codigo } = req.params
    try {
        const producto = await Producto.find({ codigo })
        res.json({ producto })
    } catch (error) {
        res.json({ error })
    }
},
getproductonombre: async (req, res) =>{
    const { nombre } = req.params
    try {
        const producto = await Producto.find({ nombre })
        res.json({ producto })
    } catch (error) {
        res.json({ error })
    }
},
getproductounimedida: async (req, res) =>{
    const { unidadMedida } = req.params
    try {
        const producto = await Producto.find({ unidadMedida })
        res.json({ producto })
    } catch (error) {
        res.json({ error })
    }
},
postAgregarproducto: async (req, res) => {
    try {
        const { codigo, nombre, descripcion, unidadMedida, precioUnitario, id_contrato, id_lote, iva, } = req.body;

        const productos = new Producto({codigo, nombre, descripcion, unidadMedida, precioUnitario, id_contrato, id_lote, iva,});
        await productos.save();
        res.json({ productos });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
},
putproducto: async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, codigo, descripcion, unidadMedida, precioUnitario, id_contrato, id_lote, iva,} = req.body
        const productos = await Producto.findByIdAndUpdate(id,{ nombre, codigo, descripcion, unidadMedida, precioUnitario, id_contrato, id_lote, iva,}, { new: true })
        await productos.save()
        res.json({ productos })
    } catch (error) {
        res.status(400).json({ error })
    }
},

putproductoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const productos = await Producto.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(productos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

putproductoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const productos = await Producto.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(productos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
// deleteproducto: async (req, res) => {
//     try {
//         const { id } = req.params
//         const productos = await Producto.findByIdAndDelete(id)
//         res.json({productos})
//     } catch (error) {
//         res.status(400).json({ error })
//     }
// },

export default httpproducto