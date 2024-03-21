import distribucion_red_area from "../models/distribucion_red_area";

const httpDistribucion_red_area ={
    getAllDistribucion: async (req, res) => {
        try {
            const Distribucion_red_area = await distribucion_red_area.find();

            if (Distribucion_red_area.length === 0) {
                res.json({ msg: "No hay distribuciones registradas" });
            } else {
                res.json({ Distribucion_red_area });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getdetalle_Distribucion_red_area_id: async (req, res) => {
        try {
            const { id } = req.params
            const Distribucion_red_area = await distribucion_red_area.findById({ id })
                .populate("idArea", "nombre")
                .populate("idRed", "nombre");
            res.json({ Distribucion_red_area })
        } catch (error) {
            res.json({ error })
        }
    },
    postAgregarDistribucion_red_area: async (req, res) => {
        try {
            const { Presupuesyo_Asignado, Presupuesyo_Actual, idArea, idRedconocimiento } = req.body
            const Distribucion_red_area = new distribucion_red_area({ Presupuesyo_Asignado, Presupuesyo_Actual, idArea, idRedconocimiento })

            await Distribucion_red_area.save()
            res.json({ Distribucion_red_area })
        } catch (error) {
            res.status(400).json({ error: "ESO ESTA RE MAL CARE VRG" })
        }

    },

    putDistribucion_red_areaInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Distribucion_red_area = await distribucion_red_area.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ Distribucion_red_area });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putDistribucion_red_areaActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Distribucion_red_area = await distribucion_red_area.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ Distribucion_red_area });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

}

export default httpDistribucion_red_area