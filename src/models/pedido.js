const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  productosDelMenu: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
    },
  ],
  estado: {
    type: String,
    required: true,
    enum: ["pendiente", "en progreso", "entregado", "cancelado"],
    default:"pendiente"
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = Pedido;
