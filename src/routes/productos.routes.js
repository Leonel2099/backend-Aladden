import { Router } from "express";
import {crearProducto, obtenerListaProductos, obtenerProducto} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();
router.route("/productos").post(validarProducto, crearProducto).get(obtenerListaProductos);

router.route("/productos/:id").get(obtenerProducto);

export default router;

