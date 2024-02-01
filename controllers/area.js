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
  putareaInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const area = await Area.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ area });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putareaActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const area = await Area.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ area });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httparea;
