/*Importacion del framework express */
import express from "express";

/*Se asigna a app toda la funcionalidad del server web */
const app = express();

/* configurar un puerto*/
app.set("port",5000);

// se hace disponible a mi server app para toda aplicacion 
export default app;


