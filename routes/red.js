import { Router } from "express";
import httpred from "../controllers/red.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/red', httpred.getred)
router.get('/red/:id',[
    check("id", "la nombre es obligatoria").not().isEmpty(),
    validarCampos
], httpred.getredid)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    validarCampos
],httpred.postagregarred );
router.put('/red/:id',[
], httpred.putred);
router.put('/inactivar/:id', httpred.putredInactivar)
router.put('/activar/:id', httpred.putredActivar)

export default router