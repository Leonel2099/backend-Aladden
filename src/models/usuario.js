const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  estado: {
    type: String,
  },
  perfil: {
    type: String,
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
