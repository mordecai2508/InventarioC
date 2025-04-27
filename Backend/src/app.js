/*Importacion del framework express */
import express from "express";

//importar cors
import cors from "cors"

//importar Router de categorias
import categoriaRoutes from "./routes/categorias.routes.js";

//importar Router de clientes
import clienteRoutes from "./routes/clientes.routes.js";

/*Se asigna a app toda la funcionalidad del server web */
const app = express();

/* configurar un puerto*/
app.set("port",5000)

//Middleware
app.use(express.json());

app.use(cors())
// routes 
app.use("/api/categorias",categoriaRoutes);

//importar rourter de empleados 
import empleadoRoutes from "./routes/empleados.routes.js"
//crear el endpoint para traer los empleados
app.use("/api/empleados", empleadoRoutes);

//crear el endpoint para subir los clientes
app.use("/api/clientes", clienteRoutes);

import productoRoutes from "./routes/productos.routes.js";

app.use("/api/productos", productoRoutes);

// se hace disponible a mi server app para toda aplicacion 
export default app;


