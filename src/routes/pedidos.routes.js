import { Router } from "express";
import { obtenerPedidos } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/pedidos").get(obtenerPedidos);