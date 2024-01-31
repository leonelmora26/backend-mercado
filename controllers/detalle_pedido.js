import detalle_pedido from "../models/detalle_pedido";

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
        const { id } = req.params
        try {
            const detalle_pedido = await Detalle_pedido.find({ id })
            res.json({ item })
        } catch (error) {
            res.json({ error })
        }
    },

};
export default httpdetalle_pedido