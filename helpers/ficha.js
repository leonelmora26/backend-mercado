import Ficha from "../models/ficha.js"; // Cambia la importación a "Ficha"

const helpersFicha = {
    existeFichaById: async (id, req) => {
        const existe = await Ficha.findById(id); // Cambia "Cliente" por "Ficha"

        if (!existe) {
            throw new Error(`El id no existe ${id}`);
        }

        req.req.fichaUpdate = existe; // Cambia "clienteUpdate" por "fichaUpdate"
    },

    existeCedula: async (cedula, req) => {
        if (cedula) {
            const existe = await Ficha.findOne({ cedula }); // Cambia "Cliente" por "Ficha"
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.cedula !== req.req.usuario.cedula)
                        throw new Error(`Ya existe esa cedula en la base de datos!!! ${cedula}`);
                } else {
                    throw new Error(`Ya existe esa cedula en la base de datos!!! ${cedula}`);
                }
            }
        }
    },

    existeEmail: async (email, req) => {
        if (email) {
            const existe = await Ficha.findOne({ email }); // Cambia "Cliente" por "Ficha"
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.email !== req.req.ficha.email) // Cambia "cliente" por "ficha"
                        throw new Error(`Ya existe ese email en la base de datos!!! ${email}`);
                } else {
                    throw new Error(`Ya existe ese email en la base de datos!!! ${email}`);
                }
            }
        }
    },
};

export default helpersFicha; // Cambia "helpersCliente" por "helpersFicha"
