import { Router } from "express";
import httpusuario from "../controllers/usuario.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";
const router=new Router()

router.get('/usuario', httpusuario.getusuario)
router.get('/usuario/:cedula',[
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos
], httpusuario.getusuariocedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    check("rol", "el rol es obligatorio").not().isEmpty(),
    validarCampos
],httpusuario.registroUsuario );
router.put('/usuario/:id',[
], httpusuario.putEditarusuario);
router.put('usuario/in/:id',[
], httpusuario.deleteusuario);
router.post('/login', httpusuario.login)

export default router