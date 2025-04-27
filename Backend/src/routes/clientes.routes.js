import { Router } from "express";
import { methodHTTP as cientesController } from "../controllers/clientes.controller.js";

const router = Router();

// Endpoint para registrar un cliente
router.post("/", cientesController.postCliente);

export default router;