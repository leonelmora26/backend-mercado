import { Router } from "express";
import httpusuario from "../controllers/usuario.js";

const router=new Router()

router.post('/login', httpusuario.login)

export default router