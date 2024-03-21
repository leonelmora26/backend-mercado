import Dislote_contrato from "../models/distribucion_lote_contrato.js"

const httpdislote_contrato = {
    
getdislote_contrato: async (req, res) => {
    try {
        const disdependencia = await Dislote_contrato.find().populate("id_contrato").populate("id_lote")
        res.json({disdependencia})
    } catch (error) {
        res.status(400).json({error})
    }
},
getdislote_contratoid: async (req, res) =>{
    const { id } = req.params
    try {
        const disdependencia = await Dislote_contrato.find({ id })
        res.json({ disdependencia })
    } catch (error) {
        res.json({ error })
    }
},
postAgregardislote_contrato: async (req, res) => {
    try {
        const { presupuesto, id_contrato, id_lote } = req.body
        const disdependencias = new Dislote_contrato({presupuesto, id_contrato, id_lote, presupuestoDisponible:presupuesto })
        await disdependencias.save()
        res.json({ disdependencias })
    } catch (error) {
        res.status(400).json({ error })
    }

},
putEditardislote_contrato: async (req, res) => {
    try {
        const { id } = req.params
        const {presupuesto, id_contrato, id_lote } = req.body
        const disdependencias = await Dislote_contrato.findByIdAndUpdate(id,{presupuesto, id_contrato, id_lote, presupuestoDisponible:presupuesto  }, { new: true })
        await disdependencias.save()
        res.json({ disdependencias })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putdislote_contratoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const disdependencia = await Dislote_contrato.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ disdependencia });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putdislote_contratoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const disdependencia = await Dislote_contrato.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ disdependencia });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
}

export default httpdislote_contrato