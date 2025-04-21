/*Importacion del framework express */
import express from "express";

//importar cors
import cors from "cors"

//importar Router de categorias
import categoriaRoutes from "./routes/categorias.routes.js";

/*Se asigna a app toda la funcionalidad del server web */
const app = express();

/* configurar un puerto*/
app.set("port",5000)

//Middleware
app.use(express.json());

app.use(cors())
// routes 
app.use("/api/categorias",categoriaRoutes);

// se hace disponible a mi server app para toda aplicacion 
export default app;


