import Ficha from "../models/ficha.js";

const helpersFicha = {
    existeFichaById: async (id, req) => {
        const existe = await Ficha.findById(id); 

        if (!existe) {
            throw new Error(`El id no existe ${id}`);
        }

        req.req.fichaUpdate = existe;
    },

    existeCedula: async (numero, req) => {
        if (numero) {
            const existe = await Ficha.findOne({ numero });
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.numero !== req.req.usuario.numero)
                        throw new Error(`Ya existe ese numero de ficha en la base de datos!!! ${numero}`);
                } else {
                    throw new Error(`Ya existe ese numero de ficha en la base de datos!!! ${numero}`);
                }
            }
        }
    },
};

export default helpersFicha;
