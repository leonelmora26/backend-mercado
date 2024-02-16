import { Router } from "express";
import httpproducto from "../controllers/producto.js";
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";
import { checkExistingProductCode } from "../helpers/producto.js"; // Importa la función de verificación

const router=new Router()

router.get('/producto', httpproducto.getproducto)
router.get('/producto/:codigo',[
    check("codigo", "El codigo es obligatorio").not().isEmpty(),
    validarCampos
], httpproducto.getproductoid)
router.get('/producto/:nombre',[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos
], httpproducto.getproductonombre)
router.get('/producto/:unidadMedida',[
    check("unidadMedida", "La unidad de medida es obligatorio").not().isEmpty(),
    validarCampos
], httpproducto.getproductounimedida)
router.post('/agregar',[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    check("unidadMedida", "La unidad de medida es obligatoria").not().isEmpty(),
    check("precioUnitario", "El precio unitario es obligatorio").not().isEmpty(),
    check("iva", "El iva es obligatorio").not().isEmpty(),
    check("consumible", "El dato de si es consumible es obligatorio").not().isEmpty(),
    validarCampos
],httpproducto.postAgregarproducto );
router.put('/producto/:id',[
    check("codigo", "el codigo es obligatorio").not().isEmpty(),
    check("codigo").custom(async (codigo) => {
        // Verificar si el código del producto ya existe
        const exists = await checkExistingProductCode(codigo);
        if (exists) {
            throw new Error("El código de producto ya está en uso");
        }
        // Si el código no existe, retorna true
        return true;
    }),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    check("unidadMedida", "La unidad de medida es obligatoria").not().isEmpty(),
    check("precioUnitario", "El precio unitario es obligatorio").not().isEmpty(),
    check("iva", "El iva es obligatorio").not().isEmpty(),
    check("consumible", "El dato de si es consumible es obligatorio").not().isEmpty(),], httpproducto.putproducto);
router.put("/inactivar/:id", httpproducto.putproductoInactivar); 

router.put("/activar/:id", httpproducto.putproductoActivar); 
// router.delete("/productoDel/:id", httpproducto.deleteproducto);

export default router