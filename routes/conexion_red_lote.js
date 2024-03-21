import { Router } from "express";
import httpConexion_red_lote from "../controllers/conexion_red_lote.js"
import { check } from "express-validator";
import { validarCampos } from "../middelwares/validator.js";


const router = new Router()

router.get("/all", httpConexion_red_lote.getAllConexion_red_lote)
router.get("/detalle",httpConexion_red_lote.getdetalle_conexion_red_loteid)
router.post("/agregar",[
    check().notEmpty,
    validarCampos
],httpConexion_red_lote.postAgregarconexion_red_lote)
router.put("/inactivar/:id",httpConexion_red_lote.putconexion_red_loteInactivar); 
router.put("/activar/:id", httpConexion_red_lote.putconexion_red_loteActivar); 

export default router;