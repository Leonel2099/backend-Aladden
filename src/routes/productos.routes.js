import { Router } from "express";
import {borrarProducto, crearProducto, editarProducto, obtenerListaProductos, obtenerProducto} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();
router.route("/").post(validarProducto, crearProducto).get(obtenerListaProductos);

router.route("/:id").get(obtenerProducto).delete(borrarProducto).put(validarProducto, editarProducto);

export default router;

