import Area from "../models/area.js"; // Importa el modelo de ficha

const httparea = {
  //GET
  getarea: async (req, res) => {
    try {
      const area = await Area.find(); // Cambia la referencia a "cliente" por "area"

      if (area.length === 0) {
        res.json({ msg: "No hay areas registradas" });
      } else {
        res.json({ area });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getareaid: async (req, res) => {
    try {
      const { id } = req.params;
      const area = await Area.findOne({ id }); // Cambia la referencia a "cliente" por "area"

      if (!area) {
        res.json({ msg: "area no encontrada" });
      } else {
        res.json({ area });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getareaNombre: async (req, res) => {
    try {
      const { nombre } = req.params;
      const area = await Area.findById(nombre);

      if (!area) {
        res.json({ msg: "area no encontrada" });
      } else {
        res.json({ area });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postagregararea: async (req, res) => {
    try {
      const { nombre} = req.body;
      const area = new Area({ nombre});
  
      await area.save();
  
      res.json({ area });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  //PUT
  putarea: async (req, res) => {
    try {
      const { id } = req.params
      const { nombre } = req.body
      const area = await Area.findByIdAndUpdate(id, { nombre }, { new: true });
      res.json({ area })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  deletearea: async (req, res) => {
    try {
      const { numero } = req.params
      const area = await Area.findOneAndDelete({ numero })
      res.json({ msg: "area eliminada" })
    } catch (error) {
      res.status(400).json({ error })
    }
  
  },
  
  deleteFichaNumero: async () => {
    try {
      const { id } = req.params
      const ficha = await Ficha.findOneAndDelete(id)
      res.json({ msg: "cliente eliminado" })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
};

export default httparea;
