import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import producto from "./routes/producto.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", producto);

app.get("/", (req, res) => {
  res.send("Servidor y base de datos funcionando 🚀");
});

// 🔹 Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado correctamente a MongoDB Atlas"))
  .catch(err => console.error("❌ Error de conexión a MongoDB:", err));

// 🔹 Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
