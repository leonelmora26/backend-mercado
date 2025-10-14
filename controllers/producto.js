import Producto from "../models/producto.js";


const httpproducto = {
  getproducto: async (req, res) => {
    try {
      const producto = await Producto.find();
      if (producto.length === 0) {
        res.json({ msg: "No hay ningun producto registrado" });
      } else {
        res.json({ producto });
      }
    } catch (error) {
      res.status(400).json({ error: 'Error al obtener productos' });
    }
  },
  getproductoid: async (req, res) => {
    try {
      const { codigo } = req.params
      const producto = await Producto.find({ codigo })
      if (!producto) {
        res.json({ msg: "producto no encontrado" });
      } else {
        res.json({ producto });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  deleteproducto: async (req, res) =>{
       try {
        const { nombre } = req.params;
        const producto = await Producto.findOneAndDelete({ nombre });

        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado por nombre' });
        }

        res.json({ mensaje: 'Producto eliminado correctamente', producto });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto por nombre' });
    }
  },
    deleteproductoid: async (req, res) =>{
       try {
        const { id } = req.params;
        const producto = await Producto.findOneAndDelete(id);

        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado por id' });
        }

        res.json({ mensaje: 'Producto eliminado correctamente', producto });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto por id' });
    }
  },
  postAgregarproducto: async (req, res) => {
    try {
      const { codigo, nombre, local, cantidad, unidadMedida, precioUnitario } = req.body
      const existe = await Producto.findOne({codigo});
      if (existe){
        return res.status(400).json({mesage : "el codigo ya esta registrado"});
      }
      const producto = new Producto({ codigo, nombre, local, cantidad, unidadMedida, precioUnitario  })
      await producto.save()
      res.json({ producto })
    } catch (error) {
      res.status(500).json({ error: "erroe al guardar el producto" })
    }

  },
  putEditarProducto: async (req, res) => {
    try {
      const { id } = req.params
      const {  codigo, nombre, local, cantidad, unidadMedida, precioUnitario } = req.body
      const productos = await Usuario.findByIdAndUpdate(id, { codigo, nombre, local, cantidad, unidadMedida, precioUnitario }, { new: true })
      await productos.save()
      res.json({ productos })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // putusuarioInactivar: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const usuario = await usuario.findByIdAndUpdate(id, { estado: 0 }, { new: true });
  //     res.json({ usuario });
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   }
  // },

  // putusuarioActivar: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const usuario = await Usuario.findByIdAndUpdate(id, { estado: 1 }, { new: true });
  //     res.json({ usuario });
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   }
  // },
}

export default httpproducto