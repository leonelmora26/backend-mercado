import Distribucion_depen_red from "../models/distribucion_depen_red"

const httpdistri_depenred = {
getdistri_depenred: async (req, res) => {
    try {
        const depen = await Distribucion_depen_red.find()
        res.json({depen})
    } catch (error) {
        res.status(400).json({error})
    }
},
getdistri_depenredid: async (req, res) =>{
    const { id } = req.params
    try {
        const depen = await Distribucion_depen_red.find({ id })
        res.json({ depen })
    } catch (error) {
        res.json({ error })
    }
},
postAgregardistri_depenred: async (req, res) => {
    try {
        const { presupuesto, año , iddependencia, idred } = req.body
        const depen = new Distribucion_depen_red({ presupuesto, presupuestoDisponible:presupuesto, año , iddependencia, idred})
        
        await depen.save()
        res.json({ depen })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

},
putEditardistri_depenred: async (req, res) => {
    try {
        const { id } = req.params
        const { presupuesto, año , iddependencia, idred} = req.body
        const depen = await Distribucion_depen_red.findByIdAndUpdate(id,{ presupuesto, presupuestoDisponible:presupuesto, año , iddependencia, idred}, { new: true })
        await depen.save()
        res.json({ depen })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putdistri_depenredInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const depen = await Distribucion_depen_red.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ depen });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putdistri_depenredActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const depen = await Distribucion_depen_red.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ depen });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

}

export default httpdistri_depenred