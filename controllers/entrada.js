import entrada from "../models/entrada";

const httEntrada = {
    getAllEntrada: async (req, res) => {
        try {
            const Entrada = await entrada.find();

            if (Entrada.length === 0) {
                res.json({ msg: "No hay registros" });
            } else {
                res.json({ Entrada });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getdetalleEntrada: async (req, res) => {
        try {
            const { id } = req.params
            const Entrada = await entrada.findById({ id })
                .populate("idProducto", "nombre")
            res.json({ Entrada })
        } catch (error) {
            res.json({ error })
        }
    },
    postAgregarEntrada: async (req, res) => {
        try {
            const { cantidad, total, idProducto } = req.body
            const Entrada = new entrada({ cantidad, total, idProducto })

            await Entrada.save()
            res.json({ Entrada })
        } catch (error) {
            res.status(400).json({ error: "ESO ESTA RE MAL CARE VRG" })
        }

    },

    putEntrada_Inactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Entrada = await entrada.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ Entrada });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putEntrada_Activar: async (req, res) => {
        try {
            const { id } = req.params;
            const Entrada = await entrada.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ Entrada });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
}

export default httEntrada