import { Router } from "express";
import {crearProducto, obtenerListaProductos} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();
router.route("/productos").post(validarProducto, crearProducto).get(obtenerListaProductos);

export default router;

