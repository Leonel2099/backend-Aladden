import { Router } from "express";
import { check } from "express-validator";
import { crearUsuario } from "../controllers/usuario.controllers";

const router = Router();

router.route("/nuevo").post();

export default router;
