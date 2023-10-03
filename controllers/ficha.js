import Ficha from "../models/ficha.js"; // Importa el modelo de ficha

const httpFicha = {
  //GET
  getAllFicha: async (req, res) => {
    try {
      const fichas = await Ficha.find(); // Cambia la referencia a "cliente" por "ficha"

      if (fichas.length === 0) {
        res.json({ msg: "No hay fichas registradas" });
      } else {
        res.json({ fichas });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFichaCedula: async (req, res) => {
    try {
      const { cedula } = req.params;
      const ficha = await Ficha.findOne({ cedula }); // Cambia la referencia a "cliente" por "ficha"

      if (!ficha) {
        res.json({ msg: "Ficha no encontrada" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFichaId: async (req, res) => {
    try {
      const { id } = req.params;
      const ficha = await Ficha.findById(id);

      if (!ficha) {
        res.json({ msg: "Ficha no encontrada" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // ... Continúa con las demás funciones (POST, PUT, DELETE) adaptándolas a "ficha" en lugar de "cliente" ...

};
export default httpFicha;
