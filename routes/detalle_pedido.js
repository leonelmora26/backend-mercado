import { Router } from "express";
import httpdetalle_pedido from "../controllers/detalle_pedido.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";

const router = new Router();

router.get("/all", httpdetalle_pedido.getAlldetalle_pedido);

router.get("/busacar/:id", httpdetalle_pedido.getdetalle_pedidoid);

router.put("/editar/:id", [
    check("nombre", "Deseas cambiar el nombre").notEmpty(),
    check("nombre", "El nombre debe tener minimo 8 letras").isLength({ min: 8}), 
    check("presupuesto", "Deseas cambiar el presupuesto actual").isNumeric().withMessage("El presupuesto debe ser un número."),
  
  validarCampos 
  ], httpdetalle_pedido.putdetalle_pedido); 

router.put("/inactivar/:id", httpdetalle_pedido.putdetalle_pedidoInactivar); 

router.put("/activar/:id", httpdetalle_pedido.putdetalle_pedidoActivar); 

export default router;