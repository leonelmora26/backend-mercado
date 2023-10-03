import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./models/usuario.js";

const app = express();
app.use(express.json());
app.use(   "/ususario", usuario)
app.use(   "/ficha", ficha)
/*app.use(   "/conductore", conductore)
app.use(   "/destino", destino) 
app.use(   "/tikect", tikect)
app.use(   "/vendedor", vendedor) */

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
