import { Router } from "express";
import {borrarProducto, crearProducto, obtenerListaProductos, obtenerProducto} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();
router.route("/productos").post(validarProducto, crearProducto).get(obtenerListaProductos);

router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto);

export default router;

