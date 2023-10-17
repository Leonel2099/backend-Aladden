import { Router } from "express";
import { actualizarPedido, crearPedido, eliminarPedido, obtenerPedidoPorId, obtenerPedidosPorIdUsuario, obtenerPedidos, editarCantidadDeproducto, obtenerCantidaDeProducto, actualizarEstodPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/").get(obtenerPedidos).post(crearPedido);
router.route("/:id").get(obtenerPedidoPorId).put(actualizarPedido).delete(eliminarPedido);
router.route("/user/:idUser").get(obtenerPedidosPorIdUsuario);
router.route("/:id/editar-producto/:idProducto").put(editarCantidadDeproducto);
router.route("/:id/productos/:idProducto/cantidad").get(obtenerCantidaDeProducto);
router.route("/estado/:id").put(actualizarEstodPedido);

export default router;