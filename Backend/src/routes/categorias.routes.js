import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categorias.controller.js";
//Creacion del enrutador
const router = Router();


//configuración del  Metodo get
router.get("/", categoriaController.getCategorias)

// hacer disponible al router en toda la app
export default router;