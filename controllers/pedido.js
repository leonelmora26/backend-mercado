import Pedido from "../models/pedido.js";

const httppedido = {
  getpedido: async (req, res) => {
    try {
      const pedido = await Pedido.find().populate("idDistribucionLoteFicha").populate("idInstructorEncargado");
      res.json({ pedido })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  getId: async (req, res) => {
    try {
      const pedido = await Pedido.findById(req.params.id);
      if (!pedido) {
        return res.status(404).json({ mensaje: "Pedido no encontrado" });
      }
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },


  postpedido: async (req, res) => {
    try {
      const { fechacreacion, fechaentrega, idDistribucionLoteFicha, idInstructorEncargado, subtotal, total, estado, createAd } = req.body
      const pedido = new Pedido({ fechacreacion, fechaentrega, idDistribucionLoteFicha, idInstructorEncargado, subtotal, total, estado, createAd })
      await pedido.save()
      res.json({ pedido })
    } catch (error) {
      res.status(400).json({ error: "cara de verga" })
    }

  },
  putpedidoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const pedido = await Pedido.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(pedido);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putpedidoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const pedido = await Pedido.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(pedido);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  // putpedido: async (req, res) => {
  //     try {
  //         const { id } = req.params
  //         const {fechacreacion , fechaentrega , iddistribucionloteficha , Instructor_encargad , Subtota , Total , Estado_solicitud , createAd} = req.body
  //         const pedido = await Pedido.findByIdAndUpdate(id,{fechacreacion , fechaentrega , iddistribucionloteficha , Instructor_encargad , Subtota , Total , Estado_solicitud , createAd}, { new: true })
  //         await pedido.save()
  //         res.json({ pedido })
  //     } catch (error) {
  //         res.status(400).json({ error })
  //     }
  // },
}
export default httppedido