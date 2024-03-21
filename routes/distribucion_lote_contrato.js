import { Router } from "express";
import httpdislote_contrato from "../controllers/distribucion_lote_contrato.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/dislote_contrato', httpdislote_contrato.getdislote_contrato)
router.get('/dislote_contrato/:id', httpdislote_contrato.getdislote_contratoid)
router.post('/agregar',[
    check("id_contrato", "el telefono es obligatorio").not().isEmpty(),
    check("id_lote", "el telefono es obligatorio").not().isEmpty(),
    check("presupuesto", "el telefono es obligatorio").not().isEmpty(),
    validarCampos
],httpdislote_contrato.postAgregardislote_contrato );
router.put('/dislote_contrato/:id',[
    check("id_contrato", "el telefono es obligatorio").not().isEmpty(),
    check("id_lote", "el telefono es obligatorio").not().isEmpty(),
    check("presupuesto", "el telefono es obligatorio").not().isEmpty(),
], httpdislote_contrato.putEditardislote_contrato);
router.put('/dislote_contrato/activar/:id', httpdislote_contrato.putdislote_contratoInactivar)
router.put('/dislote_contrato/inactivar/:id', httpdislote_contrato.putdislote_contratoActivar)

export default router