import { Router } from "express";
import { check } from "express-validator";
import { borrarUsuario, crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";

const router = Router();

router.route("/nuevo").post(validarUsuario,crearUsuario);
router.route("/").post(login).get(listarUsuarios);
router.route("/:id").delete(borrarUsuario);
export default router;
