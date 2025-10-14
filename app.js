import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import producto from "./routes/producto.js";

import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", producto)

mongoose.connect(process.env.mongoDB)
  .then(() => console.log('Connected!'));
  app.listen(process.env.PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  })

app.get("/", (req, res) => {
  res.send("Servidor y base de datos funcionando 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});