import Pedidos from "../models/pedidos";

//GET
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.find().populate("usuario").populate("producto");
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al intentar obtener los pedidos",
    });
  }
};

//POST
export const crearPedido = async (req, res) => {
  const { usuario, productosDelMenu, estado } = req.body;
  const pedido = new Pedido({
    usuario,
    productosDelMenu,
    estado,
  });
  try {
    const nuevoPedido = await pedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(404).json({
      message: "Error al intentar crear el pedido",
    });
  }
};

// GET (por id)
export const obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate("usuario").populate("productosDelMenu");
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    res.status(200).json(pedido);
  } catch (err) {
    res.status(404).json({
      message: "Error al intentar obtener el pedido",
    });
  }
};

//PUT
export const actualizarPedido = async (req, res) => {
  const { usuario, productosDelMenu, estado } = req.body;
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    pedido.usuario = usuario;
    pedido.productosDelMenu = productosDelMenu;
    pedido.estado = estado;
    const pedidoActualizado = await pedido.save();
    res.status(200).json(pedidoActualizado);
  } catch (err) {
    res.status(404).json({
      message: "Error al editar el producto",
    });
  }
};

//DELTE
export const eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndRemove(req.params.id);
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    res.status(200).json({ message: "Pedido eliminado correctamente" });
  } catch (err) {
    res.status(404).json({
      message: "Error al eliminar el pedido",
    });
  }
};
