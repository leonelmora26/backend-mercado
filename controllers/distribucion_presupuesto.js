import Dispresupuesto from "../models/distribucion_presupuesto.js";

const httpdispresupuesto = {
    
getdispresupuesto: async (req, res) => {
    try {
        const dispresupuesto = await Dispresupuesto.find().populate("lote_nombre").populate("item_presupuesto").populate("item_nombre")
        res.json({dispresupuesto})
    } catch (error) {
        res.status(400).json({error})
    }
},
getdispresupuestopreid: async (req, res) =>{
    const { id } = req.params
    try {
        const dispresupuesto = await Dispresupuesto.find({ id })
        res.json({ dispresupuesto })
    } catch (error) {
        res.json({ error })
    }
},
postAgregardispresupuesto: async (req, res) => {
    try {
        const { presupuesto, lote_nombre, item_presupuesto,item_nombre } = req.body
        const dispresupuestos = new Dispresupuesto({presupuesto, lote_nombre, item_presupuesto,item_nombre })
        
        await dispresupuestos.save()
        res.json({ dispresupuestos })
    } catch (error) {
        res.status(400).json({ error })
    }

},
putEditardispresupuestos_pre: async (req, res) => {
    try {
        const { id } = req.params
        const {presupuesto,lote_nombre, item_presupuesto,item_nombre } = req.body
        const dispresupuestos = await Dispresupuesto.findByIdAndUpdate(id,{presupuesto, lote_nombre, item_presupuesto,item_nombre }, { new: true })
        await dispresupuestos.save()
        res.json({ dispresupuestos })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putdispresupuestoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const dispresupuesto = await Dispresupuesto.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ dispresupuesto });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putdispresupuestoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const dispresupuesto = await Dispresupuesto.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ dispresupuesto });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
}

export default httpdispresupuesto