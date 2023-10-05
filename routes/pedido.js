import { Router } from "express";
import httppedido from "../controllers/pedido.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";
const router = new Router();

router.get("/all",httppedido.getpedido);
router.get("/instructor", httppedido.getinstructor);
router.get("/fechacreacion", httppedido.getfechainiciacion);
router.get("/fechaentrega", httppedido.getfechaentrega);
router.put("/pedido/id", httppedido.putpedido);
router.delete("/eliminar", httppedido.deleteusuario);
router.post("/agregar", httppedido.postpedido)

export default router;
    //   "/guardar",
    //   [
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
    
    // router.put("/inactivar/:id", httpFicha.putFichaInactivar); // Cambia "httpCliente.putClienteInactivar" a "httpFicha.putFichaInactivar"
    
    // router.put("/activar/:id", httpFicha.putFichaActivar); // Cambia "httpCliente.putClienteActivar" a "httpFicha.putFichaActivar"
    
    // router.delete("/eliminar/:numero", httpFicha.deleteFicha); // Cambia "httpCliente.deleteCliente" a "httpFicha.deleteFicha"
    
    // router.delete("/eliminar/:id", httpFicha.deleteFichaNumero); // Cambia "httpCliente.deleteClienteId" a "httpFicha.deleteFichaId"