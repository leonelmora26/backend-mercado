import { Router } from "express";
import httpFicha from "../controllers/ficha.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";
import helpersFicha from "../helpers/ficha.js";



const router = new Router();

router.get("/all", httpFicha.getAllFicha);

router.get("/buscar/:numero", httpFicha.getFichaNumero);

router.get("/Ficha/:nombre", httpFicha.getFichaNombre);

router.post(
  "/guardar",
  [
    check("codigo_ficha", "El numero de la ficha debe ser obligatorio").notEmpty(),
    check("codigo_ficha", "El numero de la ficha debe tener 7 digitos").isLength({max:7}),
    check("codigo_ficha", "El numero de la ficha debe ser obligatorio").custom(helpersFicha.checkExistingFichatCode),
    check("nombre", "El nombre de ficha obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener maximo 8 letras").isLength({min: 4}),
    check("nivel_de_formacion", "Digite el nivel").not().isEmpty(),
    check("fecha_inicio", "fecha").not().isEmpty(),
    check("ficha_fin", "fecha").not().isEmpty(),
    check("id_area", "El nombre de ficha obligatorio").notEmpty(),
    validarCampos 
  ],
  httpFicha.postFicha
);

router.put("/editar/:id", [
  check("codigo_ficha", "El numero de la ficha debe ser obligatorio").notEmpty(),
  check("codigo_ficha", "El numero de la ficha debe tener 7 digitos").isLength({max:7}),
  check("codigo_ficha", "El numero de la ficha debe ser obligatorio").custom(helpersFicha.checkExistingFichatCode),
  check("nombre", "El nombre de ficha obligatorio").notEmpty(),
  check("nombre", "El nombre debe tener maximo 8 letras").isLength({min: 4}),
  check("nivel_de_formacion", "Digite el nivel").not().isEmpty(),
  check("fecha_inicio", "fecha").not().isEmpty(),
  check("ficha_fin", "fecha").not().isEmpty(),
  
  validarCampos
], httpFicha.putFicha);

router.put("/inactivar/:id", httpFicha.putFichaInactivar);

router.put("/activar/:id", httpFicha.putFichaActivar);
export default router;
