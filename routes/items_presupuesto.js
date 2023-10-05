import { Router } from "express";
import httpitems_pre from "../controllers/items_presupuesto.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/itemns', httpitems_pre.getitems_pre)
router.get('/itemns/:nombre',[
    check("nombre", "la nombre es obligatoria").not().isEmpty(),
    validarCampos
], httpitems_pre.getitemspreid)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("presupuesto", "el telefono es obligatorio").not().isEmpty(),
    validarCampos
],httpitems_pre.postAgregaritems_pre );
router.put('/itemns/:id',[
], httpitems_pre.putEditaritems_pre);
router.put('itemns/in/:id',[
], httpitems_pre.deleteitems_pre);

export default router