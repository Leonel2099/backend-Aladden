const mongoose = require('mongoose');

// Definir el esquema del producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
  },
  estado: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  precio: {
    type: Number,
    required: true,
    min: 100,
    max: 5000,
  },
  detalle: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 300,
  },
  categoría: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  imagen: {
    type: String,
    required: true,
    unique: true,
  },
});

// Crear el modelo de Producto
const Producto = mongoose.model('producto', productoSchema);

module.exports = Producto;
