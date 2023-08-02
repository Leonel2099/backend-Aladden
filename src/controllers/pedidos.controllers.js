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
    res.json(pedido);
  } catch (err) {
    res.status(404).json({
      message: "Error al intentar obtener el pedido",
    });
  }
};
