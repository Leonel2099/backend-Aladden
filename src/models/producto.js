const mongoose = require("mongoose");

// Definir el esquema del producto
const productoSchema = new mongoose.Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 50,
  },
  estado: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 300,
    max: 10000,
  },
  detalle: {
    type: String,
    required: true,
    minlength: 10,
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
