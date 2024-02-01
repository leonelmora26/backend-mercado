import detalle_pedido from "../models/detalle_pedido.js"

const httpdetalle_pedido = {
    // GET
    getAlldetalle_pedido: async (req, res) => {
        try {
            const Detalle_pedido = await detalle_pedido.find()
                .populate("idpedido", "fechacreacion")
                .populate("idproductor", "nombre drescipcion precioUnitario");
            res.json({ Detalle_pedido });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getdetalle_pedidoid: async (req, res) => {
        try {
            const { id } = req.params
            const Detalle_pedido = await detalle_pedido.findById({ id })
                .populate("idpedido", "fechacreacion")
                .populate("idproductor", "nombre drescipcion precioUnitario");
            res.json({ Detalle_pedido })
        } catch (error) {
            res.json({ error })
        }
    },

    postdetalle_pedido: async (req, res) => {
        try{
            const { cantidad , idpedido, idproducto } = req.body;
            const Detalle_pedido = new detalle_pedido({
                cantidad , idpedido, idproducto
            });
            await Detalle_pedido.save();
            res.json(Detalle_pedido)
        } catch (error){
            res.status(400).json({ error }) 
        }
    },

    // putdetalle_pedido

};
export default httpdetalle_pedido




// putEditar: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { cantidad, idPedido, idProducto } = req.body;
//       const detallePedido = await DetallePedido.findByIdAndUpdate(
//         id,
//         { cantidad, idPedido, idProducto },
//         { new: true }
//       );
//       res.json(detallePedido);
//     } catch (error) {
//       res.status(400).json({ error });
//     }
//   },

//   putInactivar: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const detallePedido = await DetallePedido.findByIdAndUpdate(
//         id,
//         { estado: 0 },
//         { new: true }
//       );
//       res.json(detallePedido);
//     } catch (error) {
//       res.status(400).json({ error });
//     }
//   },
//   putActivar: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const detallePedido = await DetallePedido.findByIdAndUpdate(
//         id,
//         { estado: 1 },
//         { new: true }
//       );
//       res.json(detallePedido);
//     } catch (error) {
//       res.status(400).json({ error });
//     }
//   },
// };