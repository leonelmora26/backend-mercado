import Ficha from "../models/ficha.js";

const httpFicha = {
  //GET
  getAllFicha: async (req, res) => {
    try {
      const ficha = await Ficha.find();

      if (ficha.length === 0) {
        res.json({ msg: "No hay fichas registradas" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFichaNumero: async (req, res) => {
    try {
      const { numero } = req.params;
      const ficha = await Ficha.findOne({ numero }); 

      if (!ficha) {
        res.json({ msg: "Ficha no encontrada" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFichaNombre: async (req, res) => {
    try {
      const { nombre } = req.params;
      const ficha = await Ficha.findById(nombre);

      if (!ficha) {
        res.json({ msg: "Ficha no encontrada" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postFicha: async (req, res) => {
    try {
      const { codigo_ficha, nombre, nivel_de_formacion, fecha_inicio, ficha_fin} = req.body;
      const ficha = new Ficha({ codigo_ficha, nombre, nivel_de_formacion, fecha_inicio, ficha_fin});
  
      await ficha.save();
  
      res.json({ ficha });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  //PUT
  putFicha: async (req, res) => {
    try {
      const { id } = req.params
      const { codigo_ficha, nombre, nivel_de_formacion, fecha_inicio, ficha_fin } = req.body
      const ficha = await Ficha.findByIdAndUpdate(id, { codigo_ficha, nombre, nivel_de_formacion, fecha_inicio, ficha_fin }, { new: true });
      res.json({ ficha })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  
  putFichaInactivar: async (req, res) => {
    try {
      const { id } = req.params
      const ficha = await Ficha.findByIdAndUpdate(id, { estado: 0 }, { new: true })
      res.json({ ficha })
    } catch (error) {
      res.status(400).json({ error })
  
    }
  },
  putFichaActivar: async (req, res) => {
    try {
      const { id } = req.params
      const ficha = await Ficha.findByIdAndUpdate(id, { estado: 1 }, { new: true })
      res.json({ ficha })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
};

export default httpFicha;
