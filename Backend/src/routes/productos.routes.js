import { Router } from "express";
import { methodHTTP as productosController} from "../controllers/productos.controller.js";
//Creacion del enrutador
const router = Router();

router.put("/:id", productosController.updateProductos);

export default router;