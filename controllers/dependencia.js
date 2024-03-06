import dependencia from "../models/dependencia.js"

const httpdependencia = {
getdependencia: async (req, res) => {
    try {
        const depen = await dependencia.find()
        res.json({depen})
    } catch (error) {
        res.status(400).json({error})
    }
},
getdependenciaid: async (req, res) =>{
    const { nombre } = req.params
    try {
        const depen = await dependencia.find({ nombre })
        res.json({ depen })
    } catch (error) {
        res.json({ error })
    }
},
postAgregardependencia: async (req, res) => {
    try {
        const { nombre, presupuesto, año , item_presupuesto} = req.body
        const depen = new dependencia({nombre, presupuesto,presupuestoDisponible:presupuesto, año, item_presupuesto})
        
        await depen.save()
        res.json({ depen })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

},
putEditardependencia: async (req, res) => {
    try {
        const { id } = req.params
        const {nombre, presupuesto, año} = req.body
        const depen = await dependencia.findByIdAndUpdate(id,{nombre, presupuesto, presupuestoDisponible:presupuesto, año}, { new: true })
        await depen.save()
        res.json({ depen })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putdependenciaInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const depen = await dependencia.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ depen });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putdependenciaActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const depen = await dependencia.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ depen });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

}

export default httpdependencia