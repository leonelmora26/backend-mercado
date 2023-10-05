import Dispresupuesto from "../models/distribucion_presupuesto.js";

const httpdispresupuesto = {
getdispresupuesto: async (req, res) => {
    try {
        const dispresupuesto = await Dispresupuesto.find()
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
        const { presupuesto, id_lote, id_item } = req.body
        const dispresupuestos = new Dispresupuesto({presupuesto, id_lote, id_item})
        
        await dispresupuestos.save()
        res.json({ dispresupuestos })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

},
putEditardispresupuestos_pre: async (req, res) => {
    try {
        const { id } = req.params
        const {presupuesto, id_lote, id_item } = req.body
        const dispresupuestos = await Dispresupuesto.findByIdAndUpdate(id,{presupuesto, id_lote, id_item }, { new: true })
        await dispresupuestos.save()
        res.json({ dispresupuestos })
    } catch (error) {
        res.status(400).json({ error })
    }
},
deletedispresupuestos_pre: async (req, res) => {
    try {
        const { id } = req.params
        const dispresupuestos = await Dispresupuesto.findByIdAndDelete(id)
        res.json({dispresupuestos})
    } catch (error) {
        res.status(400).json({ error })
    }
},
}

export default httpdispresupuesto