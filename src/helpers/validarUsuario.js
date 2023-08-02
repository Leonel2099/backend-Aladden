import { check } from "express-validator";
import resultadoValidacion from "./resultadoProducto";

const validarUsuario =[
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 5, max: 30 })
    .withMessage("El nombre del producto debe contener entre 5 y 30 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
    )
    .withMessage("El email ingresado no es valido"),
  check("password", "La contraseña debe de ser de 8 caracteres")
    .isLength({
      min: 8,
    })
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,9}$/)
    .withMessage(
      "La contraseña debe tener 8 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    ),
  check("estado")
    .notEmpty()
    .withMessage("La estado es obligatoria")
    .isIn(["activo", "inactivo"])
    .withMessage("La estado debe ser una opcion valida"),
  check("perfil")
    .notEmpty()
    .withMessage("El perfil es obligatoria")
    .isIn(["administrador", "usuario"])
    .withMessage("El perfil debe ser una opcion valida"),
    (req, res, next )=> { resultadoValidacion(req, res, next)}
];
 export default validarUsuario;