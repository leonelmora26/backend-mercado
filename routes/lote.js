import { Router } from "express";
import httpLote from "../controllers/lote.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";
import helpersLote from "../helpers/lote.js";


const router = new Router();

router.get("/all", httpLote.getAllLote);

router.get("/buscar/:nombre", httpLote.getLoteNombre);
router.get("/Lote/:id", httpLote.getLoteId);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre de lote es obligatorio").not().isEmpty(),
    check("codigo", "El codigo de lote es obligatorio").not().isEmpty(),
    check("codigo", "El codigo de lote es obligatorio").custom(helpersLote.checkExistingLotetCode),
    validarCampos 
  ],
  httpLote.postLote 
);

router.put("/editar/:id", [
  check("nombre", "Deseas cambiar el nombre").notEmpty(),
  check("codigo", "El codigo de lote es obligatorio").not().isEmpty(),
  check("codigo", "El codigo de lote es obligatorio").custom(helpersLote.checkExistingLotetCode),
validarCampos 
], httpLote.putLote); 
router.put("/inactivar/:id", httpLote.putLoteInactivar); 
router.put("/activar/:id", httpLote.putLoteActivar); 

export default router;

