import { Router } from "express";
import httpFicha from "../controllers/ficha.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";



const router = new Router();

router.get("/all", httpFicha.getAllFicha);

router.get("/buscar/:numero", httpFicha.getFichaNumero);

router.get("/Ficha/:nombre", httpFicha.getFichaNombre);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre de ficha obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener maximo 8 letras").isLength({min: 4}),
    check("codigo_ficha", "El numero de la ficha debe ser obligatorio").notEmpty(),
    check("codigo_ficha", "El numero de la ficha debe tener 7 digitos").isLength({max:7}),
    validarCampos 
  ],
  httpFicha.postFicha
);

router.put("/editar/:id", [
  check("nombre", "Deseas cambiar el nombre").notEmpty(),
  check("numero", "Deseas cambiar el numero de ficha").notEmpty(),
  validarCampos
], httpFicha.putFicha);

router.put("/inactivar/:id", httpFicha.putFichaInactivar); // Cambia "httpCliente.putClienteInactivar" a "httpFicha.putFichaInactivar"

router.put("/activar/:id", httpFicha.putFichaActivar); // Cambia "httpCliente.putClienteActivar" a "httpFicha.putFichaActivar"
export default router;
