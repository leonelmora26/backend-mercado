import Lote from "../models/lote.js"; // Importa el modelo de lote

const httpLote = {
  // GET
  getAllLote: async (req, res) => {
    try {
      const lote = await Lote.find();

      if (lote.length === 0) {
        res.json({ msg: "No hay lotes registrados" });
      } else {
        res.json({ lote });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getLoteNombre: async (req, res) => {
    try {
      const { codigo } = req.params;
      const lote = await Lote.findOne({ codigo });

      if (!lote) {
        res.json({ msg: "Lote no encontrado" });
      } else {
        res.json({ lote });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getLoteId: async (req, res) => {
    try {
      const { id } = req.params;
      const lote = await Lote.findById(id);

      if (!lote) {
        res.json({ msg: "Lote no encontrado" });
      } else {
        res.json({ lote });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postLote: async (req, res) => {
    try {
      const { nombre, codigo } = req.body;
      const lote = new Lote({ nombre, codigo });

      await lote.save();

      res.json({ lote });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // PUT
  putLote: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, codigo } = req.body;
      const lote = await Lote.findByIdAndUpdate(id, { nombre, codigo }, { new: true });
      res.json({ lote });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putLoteInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const lote = await Lote.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ lote });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putLoteActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const lote = await Lote.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ lote });
    } catch (error) {
      res.status(400).json({ error });
    }
  },


};

export default httpLote;
