import { Router } from "express";
import { actualizarPedido, crearPedido, obtenerPedidoPorId, obtenerPedidos } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/pedidos").get(obtenerPedidos).post(crearPedido);
router.route("/pedido/:id").get(obtenerPedidoPorId).put(actualizarPedido);

export default router;