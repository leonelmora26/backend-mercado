import { Router } from "express";
import httpusuario from "../controllers/usuario.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";
import helpersUsuario from "../helpers/usuario.js";
const router=new Router()


// router.post("/recuperar-password", httpusuario.recuperarPassword);


// router.post("/confirmarcodigo/:codigo", httpusuario.confirmarCodigo);


// router.put("/nuevaPassword", [
//     check('Correo').custom(helpersUsuario.CorreoExistente2),
//     validarCampos
// ], httpusuario.nuevaPassword);

router.get('/usuario', httpusuario.getusuario)
router.get('/usuario/:cedula',[
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos
], httpusuario.getusuariocedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").custom(helpersUsuario.checkExistingUsuarioCode),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").custom(helpersUsuario.ExistingUsuario),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    check("rol", "el rol es obligatorio").not().isEmpty(),
    validarCampos
],httpusuario.registroUsuario );
router.put('/usuario/:id',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").custom(helpersUsuario.checkExistingUsuarioCode),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").custom(helpersUsuario.ExistingUsuario),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    check("rol", "el rol es obligatorio").not().isEmpty(),
    validarCampos], httpusuario.putEditarusuario);
router.put('/inactivar/:id', httpusuario.putusuarioInactivar)
router.put('/activar/:id', httpusuario.putusuarioActivar)
router.post('/login', httpusuario.login)

export default router