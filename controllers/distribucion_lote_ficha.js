import Distribucion_lote_ficha from "../models/distribucion_lote_ficha.js";

const httpDistribucion_lote_ficha = {
    getAllDistribucion_lote_ficha: async (req, res) => {
        try {
            const dis_lote_ficha = await Distribucion_lote_ficha.find().populate("idficha").populate("idDistribucionPresupuesto");

            if (dis_lote_ficha.length === 0) {
                res.json({ msg: "no hay distribucion lote ficha" });
            } else {
                res.json({ dis_lote_ficha });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getAllDistribucion_lote_fichaid: async (req, res) => {
        try {
            const { id } = req.params;
            const dis_lote_ficha = await Distribucion_lote_ficha.find({ id });
            if (!dis_lote_ficha) {
                res.json({ msg: "no encontrada" });
            } else {
                res.json({ dis_lote_ficha });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    postAgregarDistribucion_lote_ficha: async (req, res) => {
        try {
            const {presupuesto,  idficha, idDistribucionPresupuesto } = req.body;
            const distribucion_lote_fichas = new Distribucion_lote_ficha({ presupuesto, presupuestoDisponible:presupuesto, idficha, idDistribucionPresupuesto });

            await distribucion_lote_fichas.save();
            res.json({ distribucion_lote_fichas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putEditarDistribucion_lote_ficha: async (req, res) => {
        try {
            const { id } = req.params;
            const { presupuesto, idficha, idDistribucionPresupuesto } = req.body;
            const distribucion_lote_fichas = await Distribucion_lote_ficha.findByIdAndUpdate(
                presupuesto, idficha, idDistribucionPresupuesto
            );
            res.json({ distribucion_lote_fichas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putDistribucion_lote_fichaActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const distribucion_lote_fichas = await Distribucion_lote_ficha.findByIdAndUpdate(
                id,
                { estado: 0 },
                { new: true }
            );
            res.json({ distribucion_lote_fichas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putDistribucion_lote_fichaDesactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const distribucion_lote_fichas = await Distribucion_lote_ficha.findByIdAndUpdate(
                id,
                { estado: 1 },
                { new: true }
            );
            res.json({ distribucion_lote_fichas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
};

export default httpDistribucion_lote_ficha;
