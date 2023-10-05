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
      const { nombre } = req.params;
      const lote = await Lote.findOne({ nombre });

      if (!lote) {
        res.json({ msg: "Lote no encontrado" });
      } else {
        res.json({ lote });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getLotePresupuesto: async (req, res) => {
    try {
      const { presupuesto } = req.params;
      const lote = await Lote.findById(presupuesto);

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
      const { nombre, presupuesto } = req.body;
      const lote = new Lote({ nombre, presupuesto });

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
      const { nombre } = req.body;
      const lote = await Lote.findByIdAndUpdate(id, { nombre }, { new: true });
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

  // DELETE
  deleteLote: async (req, res) => {
    try {
      const { nombre } = req.params;
      const lote = await Lote.findOneAndDelete({ nombre });
      res.json({ msg: "Lote eliminado" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

};

export default httpLote;
