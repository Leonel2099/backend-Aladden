import { Router } from "express";
import { crearProducto } from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();
router.route("/productos").post(crearProducto);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('Esta es una prueba de mi ruta GET')
// })
