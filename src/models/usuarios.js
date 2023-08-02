const { body, validationResult } = require("express-validator");

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  estado: {
    type: String,
    required: true,
    enum: ["activo", "inactivo"],
  },
  perfil: {
    type: String,
    required: true,
    enum: ["administrador", "usuario"],
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
