import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./routes/usuario.js";
import ficha from "./routes/ficha.js";

const app = express();
app.use(express.json());
app.use(   "/usuario", usuario)
app.use(   "/ficha", ficha)
/*app.use(   "/conductore", conductore)
app.use(   "/destino", destino) 
app.use(   "/tikect", tikect)
app.use(   "/vendedor", vendedor) */

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/ProyectoFinal')
  .then(() => console.log('Connected!'));