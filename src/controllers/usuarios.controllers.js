// import generarJWT from "../helpers/jwt";
import Usuario from "../models/usuario";

//POST
export const crearUsuario = async (req, res) => {
  try {
    const { email } = req.body;
    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombreUsuario,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};
