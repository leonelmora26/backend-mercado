import Disdependencia from "../models/distribucion_dependencia.js";

const httpdisdependencia = {
    
getdisdependencia: async (req, res) => {
    try {
        const disdependencia = await Disdependencia.find().populate("id_dependencia")
        res.json({disdependencia})
    } catch (error) {
        res.status(400).json({error})
    }
},
getdisdependenciapreid: async (req, res) =>{
    const { id } = req.params
    try {
        const disdependencia = await Disdependencia.find({ id })
        res.json({ disdependencia })
    } catch (error) {
        res.json({ error })
    }
},
postAgregardisdependencia: async (req, res) => {
    try {
        const { presupuesto, id_dependencia } = req.body
        const disdependencias = new Disdependencia({presupuesto, id_dependencia, presupuestoDisponible:presupuesto })
        await disdependencias.save()
        res.json({ disdependencias })
    } catch (error) {
        res.status(400).json({ error })
    }

},
putEditardisdependencia_pre: async (req, res) => {
    try {
        const { id } = req.params
        const {presupuesto, id_dependencia } = req.body
        const disdependencias = await Disdependencia.findByIdAndUpdate(id,{presupuesto, id_dependencia, presupuestoDisponible:presupuesto  }, { new: true })
        await disdependencias.save()
        res.json({ disdependencias })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putdisdependenciaInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const disdependencia = await Disdependencia.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ disdependencia });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putdisdependenciaActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const disdependencia = await Disdependencia.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ disdependencia });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
}

export default httpdisdependencia