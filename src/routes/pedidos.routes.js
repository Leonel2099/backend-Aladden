import { Router } from "express";
import { actualizarPedido, crearPedido, eliminarPedido, obtenerPedidoPorId, obtenerPedidos } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/pedidos").get(obtenerPedidos).post(crearPedido);
router.route("/pedido/:id").get(obtenerPedidoPorId).put(actualizarPedido).delete(eliminarPedido);

export default router;