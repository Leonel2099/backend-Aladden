import Pedidos from "../models/pedido";

//GET
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.find()
      .populate({
        path: "productosDelMenu.producto",
        select: "-__v ",
      })
      .populate({
        path: "usuario",
        select: "-_id -password -estado -perfil -__v",
      });
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
  const pedido = new Pedidos({
    usuario,
    productosDelMenu,
    estado,
  });
  try {
    const nuevoPedido = await pedido.save();
    res.status(201).json({
      mensaje: "El producto fue creado",
      pedido: nuevoPedido,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error al intentar crear el pedido",
    });
  }
};

// GET (por id)
export const obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedidos.findById(req.params.id)
      .populate({
        path: "productosDelMenu.producto",
        select: " -__v ",
      })
      .populate({
        path: "usuario",
        select: "-_id -password -estado -perfil -__v",
      });
    res.status(200).json(pedido);
  } catch (error) {
    res.status(404).json({
      message: "Error al intentar obtener el pedido",
    });
  }
};

//PUT
export const actualizarPedido = async (req, res) => {
  const { productoId, cantidad } = req.body;
  try {
    const pedido = await Pedidos.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    const productoAgregar = {
      producto: productoId,
      cantidad: cantidad,
    };
    pedido.productosDelMenu.push(productoAgregar);
    // pedido.usuario = usuario;
    // pedido.productosDelMenu = productosDelMenu;
    // pedido.estado = estado;
    const pedidoActualizado = await pedido.save();
    res.status(201).json({
      mensaje: "El producto fue creado",
      pedido: pedidoActualizado,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error al editar el producto",
    });
  }
};

//DELTE
export const eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedidos.findByIdAndRemove(req.params.id);
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    res.status(200).json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    res.status(404).json({
      message: "Error al eliminar el pedido",
    });
  }
};

//GET ID USER
export const obtenerPedidosPorIdUsuario = async (req, res) => {
  const usuarioId = req.params.idUser;
  try {
    const pedidos = await Pedidos.find({ usuario: usuarioId })
      .populate({
        path: "productosDelMenu.producto",
        select: "-__v ",
      })
      .populate({
        path: "usuario",
        select: "-_id -password -estado -perfil -__v",
      });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(404).json({ mensaje: "Error al obtener los pedidos del usuario" });
  }
};

export const editarCantidadDeproducto = async (req, res) => {
  const pedidoId = req.params.id;
  const productoId = req.params.idProducto;
  const nuevaCantidad = req.body.cantidad;
  try {
    const pedido = await Pedidos.findById(pedidoId);
    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }
    const productoIndex = pedido.productosDelMenu.findIndex((producto) => producto.producto.toString() === productoId);
    if (productoIndex !== -1) {
      pedido.productosDelMenu[productoIndex].cantidad = nuevaCantidad;
      await pedido.save();
      return res.status(200).json(pedido);
    } else {
      return res.status(404).json({ mensaje: "Producto no encontrado en el pedido" });
    }
  } catch (error) {
    return res.status(404).json({ mensaje: "Producto no encontrado en el pedido" });
  }
};

export const obtenerCantidaDeProducto = async (req,res) =>{
  const pediodId = req.params.id;
  const productoId= req.params.idProducto;
  try{
    const pedido = await Pedidos.findById(pediodId);
    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }
    const productoEncontrado = pedido.productosDelMenu.find(productos => productos.producto.toString() === productoId);
    if (!productoEncontrado) {
      return res.status(404).json({ mensaje: "Producto no encontrado en el pedido" });
    }
    const cantidad = productoEncontrado.cantidad;
    res.json({cantidad});
  }catch (error){
    res.status(404).json({mensaje: "Error interno del servidor"})
  }
}

// Ruta para actualizar el estado de un pedido por su ID
export const actualizarEstodPedido = async (req, res) => {
  const pedidoId = req.params.id;
  const nuevoEstado = req.body.estado; // Suponiendo que estás enviando el nuevo estado en el cuerpo de la solicitud

  try {
    // Busca el pedido en la base de datos por su ID y actualiza el estado
    const pedidoActualizado = await Pedidos.findByIdAndUpdate(pedidoId, { estado: nuevoEstado }, { new: true });

    if (!pedidoActualizado) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }

    res.status(200).json(pedidoActualizado);
  } catch (error) {
    res.status(404).json({ mensaje: "Error interno del servidor" });
  }
};
