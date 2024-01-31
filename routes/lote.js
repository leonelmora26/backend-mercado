import { Router } from "express";
import httpLote from "../controllers/lote.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";


const router = new Router();

router.get("/all", httpLote.getAllLote);

router.get("/buscar/:nombre", httpLote.getLoteNombre);

router.get("/Lote/:presupuesto", httpLote.getLotePresupuesto);

router.get("/Lote/:id", httpLote.getLoteId);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre de lote es obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener minimo 8 letras").isLength({ min: 8}), 
    check("presupuesto", "Debe tener su presupuesto asignado").notEmpty(),
    check("presupuesto", "Ingresa un presupuesto a asignar").isNumeric().withMessage("El presupuesto debe ser un número."),

    validarCampos 
  ],
  httpLote.postLote 
);

router.put("/editar/:id", [
  check("nombre", "Deseas cambiar el nombre").notEmpty(),
  check("nombre", "El nombre debe tener minimo 8 letras").isLength({ min: 8}), 
  check("presupuesto", "Deseas cambiar el presupuesto actual").isNumeric().withMessage("El presupuesto debe ser un número."),

validarCampos 
], httpLote.putLote); 

router.put("/inactivar/:id", httpLote.putLoteInactivar); 

router.put("/activar/:id", httpLote.putLoteActivar); 

router.delete("/eliminar/:nombre", httpLote.deleteLote); 

export default router;

