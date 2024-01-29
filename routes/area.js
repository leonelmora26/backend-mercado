import { Router } from "express";
import httparea from "../controllers/area.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/area', httparea.getarea)
router.get('/area/:id',[
    check("id", "la nombre es obligatoria").not().isEmpty(),
    validarCampos
], httparea.getareaid)
router.get('/area/:nombre',[
    check("nombre", "la nombre es obligatoria").not().isEmpty(),
    /* validarCampos */
], httparea.getareaNombre)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    validarCampos
],httparea.postagregararea );
router.put('/area/:id',[
], httparea.putarea);
router.put('area/in/:id',[
], httparea.deletearea);

export default router