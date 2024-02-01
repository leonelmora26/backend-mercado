import { Router } from "express";
import httpdetalle_pedido from "../controllers/detalle_pedido.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";

const router = new Router();

router.get("/all", httpdetalle_pedido.getAlldetalle_pedido);

router.get("/busacar/:id", httpdetalle_pedido.getdetalle_pedidoid);

router.post("/agregar",[
    check("cantidad", "tienes que introducir una cantidad").isNumeric(),
    check("idpedido", "porfavor ingrese un id de pedido").notEmpty(),
    check("idproducto", "porfavor ingrese un id de producto").notEmpty(),
  validarCampos
], httpdetalle_pedido.postdetalle_pedido);

// router.put("/editar/:id", [
//     check("cantidad", "Deseas cambiar el nombre").isNumeric(),
//   validarCampos 
//   ], httpdetalle_pedido.getAlldetalle_pedido); 

router.put("/inactivar/:id", httpdetalle_pedido.putdetalle_pedidoInactivar); 

router.put("/activar/:id", httpdetalle_pedido.putdetalle_pedidoActivar); 

export default router;