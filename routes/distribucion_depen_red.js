import { Router } from "express";
import httpdistri_depenred from "../controllers/distribucion_depen_red.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/distripenred', httpdistri_depenred.getdistri_depenred)
router.get('/distripenred/:id', httpdistri_depenred.getdistri_depenredid) 
router.post('/agregar',[
    check("presupuesto", "la nombre es obligatoria").not().isEmpty(),
    check("iddependencia", "la iddependencia es obligatoria").not().isEmpty(),
    check("idred", "la idred es obligatoria").not().isEmpty(),
    check("año", "la año es obligatoria").not().isEmpty(),
    validarCampos
],httpdistri_depenred.postAgregardistri_depenred );
router.put('/distripenred/:id',[
    check("presupuesto", "la nombre es obligatoria").not().isEmpty(),
    check("iddependencia", "la iddependencia es obligatoria").not().isEmpty(),
    check("idred", "la idred es obligatoria").not().isEmpty(),
    check("año", "la año es obligatoria").not().isEmpty(),
    validarCampos
], httpdistri_depenred.putEditardistri_depenred);
router.put('/inactivar/:id', httpdistri_depenred.putdistri_depenredInactivar),
router.put('/activar/:id', httpdistri_depenred.putdistri_depenredActivar)

export default router