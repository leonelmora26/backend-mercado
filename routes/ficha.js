import { Router } from "express";
import httpFicha from "../controllers/ficha.js"; // Cambia la importación a "httpFicha"
import { check } from "express-validator";
import { validarCampos } from "./validar.js"; // Cambia "miderwars" a "middlewares"
import { mongo } from "mongoose";
import validarCampos from "./validar";
import helpersFicha from "../helpers/ficha.js"; // Cambia "helpersCliente" a "helpersFicha"

const router = new Router();

router.get("/all", httpFicha.getAllFicha); // Cambia "httpCliente" a "httpFicha"

router.get("/buscar/:numero", httpFicha.getFichaCedula); // Cambia "httpCliente.getClienteCedula" a "httpFicha.getFichaCedula"

router.get("/Ficha/:nombre", httpFicha.getFichaId); // Cambia "httpCliente.getClienteId" a "httpFicha.getFichaId"

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Máximo 15 caracteres").isLength({ max: 15 }),
    check("numero", "La cedula es obligatoria").notEmpty(),
    check("numero", "Tiene que tener 7 digitos").isLength({
      min: 7,
      max: 10,
    }),
    check("cedula", "La cedula esta duplicada").custom(helpersFicha.existeCedula), // Cambia "helpersCliente" a "helpersFicha"
    check("email", "El email debe contener el símbolo @").custom((value) => value.includes('@')),
    check("email", "El email ya existe").custom(helpersFicha.existeEmail), // Cambia "helpersCliente" a "helpersFicha"
    validarCampos 
  ],
  httpFicha.postFicha // Cambia "httpCliente.postCliente" a "httpFicha.postFicha"
);

router.put("/editar/:id", [
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("nombre", "Máximo 15 caracteres").isLength({ max: 15 }),
  check("cedula", "La cedula es obligatoria").notEmpty(),
  check("cedula", "Tiene que tener 10 digitos").isLength({
    min: 8,
    max: 10,
  }),
  check("cedula", "La cedula esta duplicada").custom(helpersFicha.existeCedula), // Cambia "helpersCliente" a "helpersFicha"
  check("email", "El email ya existe").custom(helpersFicha.existeEmail), // Cambia "helpersCliente" a "helpersFicha"
  validarCampos
], httpFicha.putFicha); // Cambia "httpCliente.putCliente" a "httpFicha.putFicha"

router.put("/inactivar/:id", httpFicha.putFichaInactivar); // Cambia "httpCliente.putClienteInactivar" a "httpFicha.putFichaInactivar"

router.put("/activar/:id", httpFicha.putFichaActivar); // Cambia "httpCliente.putClienteActivar" a "httpFicha.putFichaActivar"

router.delete("/eliminar/:cedula", httpFicha.deleteFicha); // Cambia "httpCliente.deleteCliente" a "httpFicha.deleteFicha"

router.delete("/eliminar/:id", httpFicha.deleteFichaId); // Cambia "httpCliente.deleteClienteId" a "httpFicha.deleteFichaId"

export default router;
