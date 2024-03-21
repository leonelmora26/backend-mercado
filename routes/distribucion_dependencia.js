import { Router } from "express";
import httpdisdependencia from "../controllers/distribucion_dependencia.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/disdependencia', httpdisdependencia.getdisdependencia)
router.get('/disdependencia/:id',[
    check("id", "la nombre es obligatoria").not().isEmpty(),
    validarCampos
], httpdisdependencia.getdisdependenciapreid)
router.post('/agregar',[
    check("id_dependencia", "el telefono es obligatorio").not().isEmpty(),
    check("presupuesto", "el telefono es obligatorio").not().isEmpty(),
    validarCampos
],httpdisdependencia.postAgregardisdependencia );
router.put('/disdependencia/:id',[
], httpdisdependencia.putEditardisdependencia_pre);
router.put('/disdependencia/activar/:id', httpdisdependencia.putdisdependenciaInactivar)
router.put('/disdependencia/inactivar/:id', httpdisdependencia.putdisdependenciaActivar)

export default router