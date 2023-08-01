const { body, validationResult } = require('express-validator');

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  estado: {
    type: String,
    required: true,
    enum: ['Activo', 'Inactivo'],
    default: 'Activo',
  },
  perfil: {
    type: String,
    required: true,
    enum: ['Administrador', 'Usuario'],
    default: 'Usuario',
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
