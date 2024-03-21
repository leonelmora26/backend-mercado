import { Router } from "express";
import httpconexion_dependencia_contrato from "../controllers/conexio_dependencia_contrato.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/conexiondepencontrato', httpconexion_dependencia_contrato.getconexion_dependencia_contrato)
router.get('/conexiondepencontrato/:id', httpconexion_dependencia_contrato.getconexion_dependencia_contratoid) 
router.post('/agregar',[
    check("iddistribucion_depen", "la nombre es obligatoria").not().isEmpty(),
    check("idcontrato", "la codigo es obligatoria").not().isEmpty(),
    validarCampos
],httpconexion_dependencia_contrato.postAgregarconexion_dependencia_contrato );
router.put('/conexiondepencontrato/:id',[
    check("iddistribucion_depen", "la nombre es obligatoria").not().isEmpty(),
    check("idcontrato", "la codigo es obligatoria").not().isEmpty(),
    validarCampos
], httpconexion_dependencia_contrato.putEditarconexion_dependencia_contrato);
router.put('/inactivar/:id', httpconexion_dependencia_contrato.putconexion_dependencia_contratoInactivar),
router.put('/activar/:id', httpconexion_dependencia_contrato.putconexion_dependencia_contratoActivar)

export default router