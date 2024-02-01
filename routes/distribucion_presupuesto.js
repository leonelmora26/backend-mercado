import { Router } from "express";
import httpdispresupuesto from "../controllers/distribucion_presupuesto.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/dispresupuesto', httpdispresupuesto.getdispresupuesto)
router.get('/dispresupuesto/:id',[
    check("id", "la nombre es obligatoria").not().isEmpty(),
    validarCampos
], httpdispresupuesto.getdispresupuestopreid)
router.post('/agregar',[
    check("presupuesto", "el telefono es obligatorio").not().isEmpty(),
    validarCampos
],httpdispresupuesto.postAgregardispresupuesto );
router.put('/dispresupuesto/:id',[
], httpdispresupuesto.putEditardispresupuestos_pre);
router.put('/dispresupuesto/activar/:id', httpdispresupuesto.putdispresupuestoActivar)
router.put('/dispresupuesto/inactivar/:id', httpdispresupuesto.putdispresupuestoInactivar)

export default router