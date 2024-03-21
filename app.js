import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./routes/usuario.js";
import ficha from "./routes/ficha.js";
import items_presupuesto from "./routes/contrato.js"
import area from "./routes/area.js"
import dislote_contrato from "./routes/distribucion_lote_contrato.js"
import producto from "./routes/producto.js";
import Conexion_dependenica_contrato from "./routes/conexio_dependencia_contrato.js"
import lote from "./routes/lote.js";
import Disdependencia from "./routes/distribucion_dependencia.js"
import pedido from "./routes/pedido.js"
import detalle_pedido from "./routes/detalle_pedido.js"
import dependencia from "./routes/dependencia.js";
import disdepenred from "./routes/distribucion_depen_red.js";
import red from "./routes/red.js";
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
app.use(   "/usuario", usuario)
app.use(   "/dislote_contrato", dislote_contrato)
app.use(   "/dependencia", dependencia)
app.use(   "/disdepenred", disdepenred)
app.use(   "/red", red)
app.use(   "/ficha", ficha)
app.use(   "/items", items_presupuesto)
app.use(   "/area", area)
app.use(   "/conexiondepencontrato", Conexion_dependenica_contrato)
app.use(   "/producto", producto)
app.use(   "/pedido", pedido)
app.use(   "/lote", lote)
app.use(   "/disdependencia", Disdependencia)
app.use(   "/detalle_pedido", detalle_pedido)

mongoose.connect(process.env.mongoDB)
  .then(() => console.log('Connected!'));

  app.listen(process.env.PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  })