import { Router } from "express";
import httpproducto from "../controllers/producto.js";
import { check } from "express-validator";
import { validarCampos } from "../middelwares/validator.js";

const router = new Router();

// ✅ Obtener todos los productos
router.get('/producto', [validarCampos], httpproducto.getproducto);

// ✅ Obtener producto por código
router.get('/producto/:codigo', [
    check("codigo", "El código del producto es obligatorio").not().isEmpty(),
    validarCampos
], httpproducto.getproductoid); 

// ✅ Agregar producto 
router.post('/agregar', [
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("local", "El local es obligatorio").not().isEmpty(),
    check("local", "El local debe ser uno de: D1, ARA, DolarCity, otro").isIn(["D1", "ARA", "DolarCity", "otro"]),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número válido").isNumeric(),
    check("unidadMedida", "La unidad de medida es obligatoria").not().isEmpty(),
    check("unidadMedida", "La unidad de medida debe ser una de: Kg, Gr, Ml, L").isIn(["Kg", "Gr", "Ml", "L"]),
    check("precioUnitario", "El precio unitario es obligatorio").not().isEmpty(),
    check("precioUnitario", "El precio unitario debe ser un número válido").isNumeric(),
    validarCampos
], httpproducto.postAgregarproducto);

// ✅ Editar producto
router.put('/producto/:codigo', [
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("local", "El local es obligatorio").not().isEmpty(),
    check("local", "El local debe ser uno de: D1, ARA, DolarCity, otro").isIn(["D1", "ARA", "DolarCity", "otro"]),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número válido").isNumeric(),
    check("unidadMedida", "La unidad de medida es obligatoria").not().isEmpty(),
    check("unidadMedida", "La unidad de medida debe ser una de: Kg, Gr, Ml, L").isIn(["Kg", "Gr", "Ml", "L"]),
    check("precioUnitario", "El precio unitario es obligatorio").not().isEmpty(),
    check("precioUnitario", "El precio unitario debe ser un número válido").isNumeric(),
    validarCampos
], httpproducto.putEditarProducto);

// ✅ Eliminar por nombre
router.delete('/eliminar/:nombre', [
    check("nombre", "El nombre es obligatorio para eliminar el producto").not().isEmpty(),
    validarCampos
], httpproducto.deleteproducto);

// ✅ Eliminar por código o ID
router.delete('/eliminar/codigo/:id', [
    check("id", "El ID del producto es obligatorio").not().isEmpty(),
    validarCampos
], httpproducto.deleteproductoid);

export default router;
