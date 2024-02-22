import ItemsPresupuesto from "../models/items_presupuesto.js";

const httpitems_pre = {
getitems_pre: async (req, res) => {
    try {
        const item = await ItemsPresupuesto.find()
        res.json({item})
    } catch (error) {
        res.status(400).json({error})
    }
},
getitemspreid: async (req, res) =>{
    const { nombre } = req.params
    try {
        const item = await ItemsPresupuesto.find({ nombre })
        res.json({ item })
    } catch (error) {
        res.json({ error })
    }
},
postAgregaritems_pre: async (req, res) => {
    try {
        const { nombre, presupuesto, año , item_presupuesto} = req.body
        const items = new ItemsPresupuesto({nombre, presupuesto,presupuestoDisponible:presupuesto, año, item_presupuesto})
        
        await items.save()
        res.json({ items })
    } catch (error) {
        res.status(400).json({ error: "cara de verga" })
    }

},
putEditaritems_pre: async (req, res) => {
    try {
        const { id } = req.params
        const {nombre, presupuesto, año} = req.body
        const items = await ItemsPresupuesto.findByIdAndUpdate(id,{nombre, presupuesto, presupuestoDisponible:presupuesto, año}, { new: true })
        await items.save()
        res.json({ items })
    } catch (error) {
        res.status(400).json({ error })
    }
},
putitempresupuestoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const itempresupuesto = await ItemsPresupuesto.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ itempresupuesto });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putitempresupuestoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const itempresupuesto = await ItemsPresupuesto.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ itempresupuesto });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

}

export default httpitems_pre