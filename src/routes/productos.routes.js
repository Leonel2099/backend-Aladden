import { Router } from "express";
import {borrarProducto, crearProducto, editarProducto, obtenerListaProductos, obtenerProducto} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();
router.route("/productos").post(validarProducto, crearProducto).get(obtenerListaProductos);

router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(validarProducto, editarProducto);

export default router;

