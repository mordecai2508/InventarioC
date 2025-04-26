import { Router } from "express";
import { methodHTTP as empleadosController} from "../controllers/empleados.controller.js";
//Creacion del enrutador
const router = Router();

router.get("/", empleadosController.getEmpleados);

export default router;