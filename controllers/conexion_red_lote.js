import conexion_red_lote from "../models/conexion_red_lote.js"

const httpConexion_red_lote = {
    getAllConexion_red_lote: async (req, res) => {
        try {
            const Conexion_red_lote = await conexion_red_lote.find();

            if (Conexion_red_lote.length === 0) {
                res.json({ msg: "No hay conexiones registradas" });
            } else {
                res.json({ Conexion_red_lote });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getdetalle_conexion_red_loteid: async (req, res) => {
        try {
            const { id } = req.params
            const Conexion_red_lote = await conexion_red_lote.findById({ id })
                .populate("idlote", "nombre")
                .populate("idRed", "nombre");
            res.json({ Conexion_red_lote })
        } catch (error) {
            res.json({ error })
        }
    },
    postAgregarconexion_red_lote: async (req, res) => {
        try {
            const { idLote, idRedconocimiento } = req.body
            const Conexion_red_lote = new conexion_red_lote({ idLote, idRedconocimiento })

            await Conexion_red_lote.save()
            res.json({ Conexion_red_lote })
        } catch (error) {
            res.status(400).json({ error: "ESO ESTA RE MAL CARE VRG" })
        }

    },

    putconexion_red_loteInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Conexion_red_lote = await conexion_red_lote.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ Conexion_red_lote });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putconexion_red_loteActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Conexion_red_lote = await conexion_red_lote.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ Conexion_red_lote });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

}

export default httpConexion_red_lote
