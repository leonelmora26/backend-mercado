import { Router } from "express";
import httpDistribucion_area_destino from "../controllers/distribucion_area_destino.js"
import { check } from "express-validator";
import { validarCampos } from "../middelwares/validator.js";


const router = new Router()

router.get("/all", httpDistribucion_area_destino.getAllDistribucion_area_destino)
router.get("/detalle", httpDistribucion_area_destino.getdetalle_Distribucion_area_destinoid)
router.post("/agregar",[
    check().notEmpty,
    validarCampos
], httpDistribucion_area_destino.postAgregarDistribucion_area_destino)
router.put("/inactivar/:id", httpDistribucion_area_destino.putDistribucion_area_destinoInactivar); 
router.put("/activar/:id", httpDistribucion_area_destino.putDistribucion_area_destinoActivar); 

export default router;