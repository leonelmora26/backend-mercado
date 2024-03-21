import { Router } from "express";
import httpDistribucion_red_area from "../controllers/distribucion_red_area";
import { check } from "express-validator";
import { validarCampos } from "../middelwares/validator";


const router = new Router()

router.get("/all", httpDistribucion_red_area.getAllDistribucion)
router.get("/detalle", httpDistribucion_red_area.getdetalle_Distribucion_red_area_id)
router.post("/agregar",[
    check().notEmpty,
    validarCampos
], httpDistribucion_red_area.postAgregarDistribucion_red_area)
router.put("/inactivar/:id", httpDistribucion_red_area.putDistribucion_red_areaInactivar); 
router.put("/activar/:id", httpDistribucion_red_area.putDistribucion_red_areaActivar); 

export default router;