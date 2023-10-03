import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./models/usuario.js";

const app = express();
app.use(express.json());
app.use(   "/ususario", usuario)
/* app.use(   "/cliente", cliente)
app.use(   "/conductore", conductore)
app.use(   "/destino", destino) 
app.use(   "/tikect", tikect)
app.use(   "/vendedor", vendedor) */

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.Mongo_db)
    .then(() => console.log('Connected!'));
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
