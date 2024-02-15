import { Router } from "express";
import httppedido from "../controllers/pedido.js";
import { check } from "express-validator";
import { validarCampos } from "../middelwares/validator.js";
const router = new Router();

router.get("/all", httppedido.getpedido);

router.get("/buscarid/:id", [
  check("id", "Digite el ID").not().isEmpty(),
  check("id", "No es un Mongo ID válido").isMongoId(),
  validarCampos
], httppedido.getId);

// router.put(
//   "/pedido/id",
//   [
//     check("nombre", "Deseas cambiar el nombre").notEmpty(),
//     check("numero", "Deseas cambiar el numero de ficha").notEmpty(),
//     validarCampos,
//   ],
//   httppedido.putpedido
// );

router.post(
  "/agregar",
  [
    check('fechacreacion', "Digite la fecha de creación").not().isEmpty(),
    check('idficha', "Digite el ID de IdFicha").not().isEmpty(),
    check('idficha', "No es un Mongo ID válido").isMongoId(),
    check('idInstructorEncargado', "Digite el ID de InstructorEncargado").not().isEmpty(),
    check('idInstructorEncargado', "No es un Mongo ID válido").isMongoId(),
    validarCampos,
  ],
  httppedido.postpedido
);

router.put("/inactivar/:id", httppedido.putpedidoInactivar); 

router.put("/activar/:id", httppedido.putpedidoActivar); 

export default router;


//  router.post("/guardar",[
//     check("nombre", "El nombre de ficha obligatorio").notEmpty(),
//     check("nombre", "El nombre debe tener maximo 8 letras").isLength({min: 4}),
//     check("numero", "El numero de la ficha debe ser obligatorio").notEmpty(),
//     check("numero", "El numero de la ficha debe tener 7 digitos").isLength({max:7}),
//     validarCampos
//   ],
//   httpFicha.postFicha
// );

// router.put("/editar/:id", [
//   check("nombre", "Deseas cambiar el nombre").notEmpty(),
//   check("numero", "Deseas cambiar el numero de ficha").notEmpty(),
//   validarCampos
// ], httpFicha.putFicha);


// router.delete("/eliminar/:numero", httpFicha.deleteFicha); // Cambia "httpCliente.deleteCliente" a "httpFicha.deleteFicha"

// router.delete("/eliminar/:id", httpFicha.deleteFichaNumero); // Cambia "httpCliente.deleteClienteId" a "httpFicha.deleteFichaId"
