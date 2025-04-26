import { Router } from "express";
import { registrarCliente } from "../controllers/clientes.controller.js";

const router = Router();

// Endpoint para registrar un cliente
router.post("/", registrarCliente);

export default router;