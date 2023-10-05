import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./routes/usuario.js";
import ficha from "./routes/ficha.js";
import items_presupuesto from "./routes/items_presupuesto.js"

const app = express();
app.use(express.json());
app.use(   "/usuario", usuario)
app.use(   "/ficha", ficha)
app.use(   "/items", items_presupuesto)

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/ProyectoFinal')
  .then(() => console.log('Connected!'));