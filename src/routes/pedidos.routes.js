import { Router } from "express";
import { crearPedido, obtenerPedidos } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/pedidos").get(obtenerPedidos).post(crearPedido);
router.route("/pedido/:id").get();

export default router;