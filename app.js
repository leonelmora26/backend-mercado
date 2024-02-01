import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./routes/usuario.js";
import ficha from "./routes/ficha.js";
import items_presupuesto from "./routes/items_presupuesto.js"
import area from "./routes/area.js"
import producto from "./routes/producto.js";
import lote from "./routes/lote.js";
import distribucion_presupuesto from "./routes/distribucion_presupuesto.js";
import pedido from "./routes/pedido.js"
import detalle_pedido from "./routes/detalle_pedido.js"
import distribucion_lote_ficha from "./routes/distribucion_lote_ficha.js";
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
app.use(   "/usuario", usuario)
app.use(   "/ficha", ficha)
app.use(   "/items", items_presupuesto)
app.use(   "/area", area)
app.use(   "/producto", producto)
app.use(   "/pedido", pedido)
app.use(   "/lote", lote)
app.use(   "/dispresupuesto", distribucion_presupuesto)
app.use(   "/detalle_pedido", detalle_pedido)
app.use(   "/disloteficha", distribucion_lote_ficha )

mongoose.connect(process.env.mongoDB)
  .then(() => console.log('Connected!'));

  app.listen(process.env.PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  })