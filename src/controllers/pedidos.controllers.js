import Pedidos from "../models/pedidos";

//GET
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.find().populate("usuario").populate("producto");
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al intentar obtener los productos",
    });
  }
};

