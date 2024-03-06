import { Router } from "express";
import httpdependencia from "../controllers/dependencia.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/dependencia', httpdependencia.getdependencia)
router.get('/dependencia/:id', httpdependencia.getdependenciaid) 
router.post('/agregar',[
    check("nombre", "la nombre es obligatoria").not().isEmpty(),
    check("codigo", "la codigo es obligatoria").not().isEmpty(),
    check("idcontrato", "la idcontrato es obligatoria").not().isEmpty(),
    validarCampos
],httpdependencia.postAgregardependencia );
router.put('/dependencia/:id',[
    check("nombre", "la nombre es obligatoria").not().isEmpty(),
    check("codigo", "la codigo es obligatoria").not().isEmpty(),
    check("idcontrato", "la idcontrato es obligatoria").not().isEmpty(),
    validarCampos
], httpdependencia.putEditardependencia);
router.put('/inactivar/:id', httpdependencia.putdependenciaInactivar),
router.put('/activar/:id', httpdependencia.putdependenciaActivar)

export default router