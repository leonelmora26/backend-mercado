import distribucion_area_destino from "../models/distribucion_area_destino";

const httpDistribucion_area_destino = {
    getAllDistribucion_area_destino: async (req, res) => {
        try {
            const Distribucion_area_destino = await distribucion_area_destino.find();

            if (Distribucion_area_destino.length === 0) {
                res.json({ msg: "No hay distribuciones registradas" });
            } else {
                res.json({ Distribucion_area_destino });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getdetalle_Distribucion_area_destinoid: async (req, res) => {
        try {
            const { id } = req.params
            const Distribucion_area_destino = await distribucion_area_destino.findById({ id })
                .populate("idArea", "nombre")
                .populate("idFicha", "nombre");
            res.json({ Distribucion_area_destino })
        } catch (error) {
            res.json({ error })
        }
    },
    postAgregarDistribucion_area_destino: async (req, res) => {
        try {
            const { Presupuesto_Asignado,Presupuesto_Actual, idAreaTematica, idDestino } = req.body
            const Distribucion_area_destino = new distribucion_area_destino({ Presupuesto_Asignado,Presupuesto_Actual, idAreaTematica, idDestino })

            await Distribucion_area_destino.save()
            res.json({ Conexion_red_lote })
        } catch (error) {
            res.status(400).json({ error: "ESO ESTA RE MAL CARE VRG" })
        }

    },

    putDistribucion_area_destinoInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Distribucion_area_destino = await distribucion_area_destino.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ Distribucion_area_destino });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putDistribucion_area_destinoActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Distribucion_area_destino = await distribucion_area_destino.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ Distribucion_area_destino });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
}

export default httpDistribucion_area_destino