import Pedido from "../models/pedido.js";

const httppedido = {
    getpedido: async (req, res) => {
        try {
            const pedido = await Pedido.find()
            res.json({pedido})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getinstructor: async (req, res) =>{
        const {  Instructor_encargado } = req.params
        try {
            const pedido = await Pedido.find({  Instructor_encargado })
            res.json({ pedido })
        } catch (error) {
            res.json({ error })
        }
    },
    getfechainiciacion: async (req, res) =>{
        const {  fechacreacion } = req.params
        try {
            const pedido = await Pedido.find({  fechacreacion })
            res.json({ pedido })
        } catch (error) {
            res.json({ error })
        }
    },
    getfechaentrega: async (req, res) =>{
        const {  fechaentrega } = req.params
        try {
            const pedido = await Pedido.find({  fechaentrega })
            res.json({ pedido })
        } catch (error) {
            res.json({ error })
        }
    },
    postpedido: async (req, res) => {
        try {
            const { fechacreacion , fechaentrega , iddistribucionloteficha , Instructor_encargado , Subtotal , Total , Estado_solicitud , createAd} = req.body
            const pedido = new Pedido({fechacreacion , fechaentrega , iddistribucionloteficha , Instructor_encargado , Subtotal , Total , Estado_solicitud , createAd})
            await pedido.save()
            res.json({ pedido })
        } catch (error) {
            res.status(400).json({ error: "cara de verga" })
        }
    
    },
    putpedido: async (req, res) => {
        try {
            const { id } = req.params
            const {fechacreacion , fechaentrega , iddistribucionloteficha , Instructor_encargad , Subtota , Total , Estado_solicitud , createAd} = req.body
            const pedido = await Pedido.findByIdAndUpdate(id,{fechacreacion , fechaentrega , iddistribucionloteficha , Instructor_encargad , Subtota , Total , Estado_solicitud , createAd}, { new: true })
            await pedido.save()
            res.json({ pedido })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deleteusuario: async (req, res) => {
        try {
            const { id } = req.params
            const pedido = await Pedido.findByIdAndDelete(id)
            res.json({pedido})
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}
    export default httppedido