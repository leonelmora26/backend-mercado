import Conexio_dependencia_contrato from "../models/conexio_dependencia_contrato.js"
 
const httpconexion_dependencia_contrato = {
getconexion_dependencia_contrato: async (req, res) => {
    try {
        const depen = await dependencia.find()
        res.json({depen})
    } catch (error) {
        res.status(400).json({error})
    }
},
getconexion_dependencia_contratoid: async (req, res) =>{
    const { id } = req.params
    try {
        const depen = await Conexio_dependencia_contrato.find({ id })
        res.json({ depen })
    } catch (error) {
        res.json({ error })
    }
},
postAgregarconexion_dependencia_contrato: async (req, res) => {
    try {
        const { iddistribucion_depen, idcontrato} = req.body
        const depen = new Conexio_dependencia_contrato({iddistribucion_depen, idcontrato})
        
        await depen.save()
        res.json({ depen })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

},
putEditarconexion_dependencia_contrato: async (req, res) => {
    try {
        const { id } = req.params
        const {iddistribucion_depen, idcontrato} = req.body
        const depen = await Conexio_dependencia_contrato.findByIdAndUpdate(id,{iddistribucion_depen, idcontrato}, { new: true })
        await depen.save()
        res.json({ depen })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putconexion_dependencia_contratoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const depen = await Conexio_dependencia_contrato.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ depen });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putconexion_dependencia_contratoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const depen = await Conexio_dependencia_contrato.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ depen });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

}

export default httpconexion_dependencia_contrato