import Items_presupuesto from "../models/items_presupuesto.js";

const httpitems_pre = {
getitems_pre: async (req, res) => {
    try {
        const item = await Items_presupuesto.find()
        res.json({item})
    } catch (error) {
        res.status(400).json({error})
    }
},
getitemspreid: async (req, res) =>{
    const { nombre } = req.params
    try {
        const item = await Items_presupuesto.find({ nombre })
        res.json({ item })
    } catch (error) {
        res.json({ error })
    }
},
postAgregaritems_pre: async (req, res) => {
    try {
        const { nombre, presupuesto } = req.body
        const items = new Items_presupuesto({nombre, presupuesto})
        
        await items.save()
        res.json({ items })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

},
putEditaritems_pre: async (req, res) => {
    try {
        const { id } = req.params
        const {nombre, presupuesto} = req.body
        const items = await Items_presupuesto.findByIdAndUpdate(id,{nombre, presupuesto}, { new: true })
        await items.save()
        res.json({ items })
    } catch (error) {
        res.status(400).json({ error })
    }
},
deleteitems_pre: async (req, res) => {
    try {
        const { id } = req.params
        const items = await Items_presupuesto.findByIdAndDelete(id)
        res.json({items})
    } catch (error) {
        res.status(400).json({ error })
    }
},
}

export default httpitems_pre