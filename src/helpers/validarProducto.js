import { check } from "express-validator";
import resultadoValidacion from "./resultadoProducto";

const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe contener entre 2 y 100 caracteres")
    .trim()
    .escape(),
  check("estado")
    .notEmpty()
    .withMessage("Estado es un dato obligatorio")
    .isIn(["disponible", "agotado", "oferta", "descatalogado"])
    .withMessage("El estado debe ser una opcion valida"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un valor numerico")
    .custom((value) => {
      if (value >= 200 && value <= 5000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 200 y 5000");
      }
    }),
  check("detalle")
    .notEmpty()
    .withMessage("El detalle del producto es obligatorio")
    .isLength({ min: 30, max: 500 })
    .withMessage("El detalle del producto debe contener entre 30 y 500 caracteres")
    .trim()
    .escape(),
  check("categoría")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Plato caliente", "Plato frio", "Sin tacc", "Postres"])
    .withMessage("La categoria debe ser una opcion valida"),
  check("imagen")
    .notEmpty()
    .withMessage("La url de la imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
    .withMessage("La imagen debe ser una url valida, terminada en (png|jpe?g|gif|svg)"),
    (req, res, next )=> { resultadoValidacion(req, res, next)}
];

export default validarProducto;
