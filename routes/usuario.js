import { Router } from "express";
import httpvendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import {validarJWT} from "../middelwares/validar.js"
import validarCampos from "../middelwares/validator.js";

const router=new Router()

router.post('/login', httpvendedor.login)