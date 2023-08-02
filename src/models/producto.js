const mongoose = require("mongoose");

// Definir el esquema del producto
const productoSchema = new mongoose.Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 100,
  },
  estado: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 200,
    max: 5000,
  },
  detalle: {
    type: String,
    required: true,
    minlength: 30,
    maxlength: 500,
  },
  categoría: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
    unique: true,
  },
});

// Crear el modelo de Producto
const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
