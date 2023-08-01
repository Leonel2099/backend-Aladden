import Producto from "../models/producto";

//POST
export const crearProducto = async (req, res) => {
   try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
        mensaje: 'El producto fue creado correctamente' 
    })

   } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: 'Error, no se pudo crear el producto'
    })
   }
  }