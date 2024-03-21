import { Router } from "express";
import httEntrada from "../controllers/entrada";
import { check } from "express-validator";
import { validarCampos } from "../middelwares/validator";


const router = new Router()

router.get("/all", httEntrada.getAllEntrada)
router.get("/detalle", httEntrada.getdetalleEntrada)
router.post("/agregar",[
    check().notEmpty,
    validarCampos
], httEntrada.postAgregarEntrada)
router.put("/inactivar/:id",httEntrada.putEntrada_Inactivar); 
router.put("/activar/:id", httEntrada.putEntrada_Activar); 

export default router;