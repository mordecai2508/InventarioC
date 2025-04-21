import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categorias.controller.js";
//Creacion del enrutador
const router = Router();


//configuración del  Metodo get
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);

//ruta que recibe un parametro
router.get("/:id", categoriaController.getCategory);

//Elimina una categoria por un ID
router.delete("/:id", categoriaController.deleteCategory);


//Actualizar, recibe el cuerpo y el id
router.put("/:id", categoriaController.updateCategory);

// hacer disponible al router en toda la app
export default router;