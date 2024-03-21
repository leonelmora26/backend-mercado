import Red from "../models/red.js"; 

const httpred = {
  //GET
  getred: async (req, res) => {
    try {
      const red = await Red.find(); 

      if (red.length === 0) {
        res.json({ msg: "No hay areas registradas" });
      } else {
        res.json({ area });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getredid: async (req, res) => {
    try {
      const { id } = req.params;
      const red = await Red.findOne({ id }); 
      if (!red) {
        res.json({ msg: "red no encontrada" });
      } else {
        res.json({ red });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postagregarred: async (req, res) => {
    try {
      const { nombre} = req.body;
      const red = new Red({ nombre});
  
      await red.save();
  
      res.json({ red });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  //PUT
  putred: async (req, res) => {
    try {
      const { id } = req.params
      const { nombre } = req.body
      const red = await Red.findByIdAndUpdate(id, { nombre }, { new: true });
      res.json({ red })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  putredInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const red = await Red.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ red });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putredActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const red = await Red.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ red });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httpred;
