import Proveedor from "../models/proveedor.mjs";


export const obtenerProveedores = async (req, res) => {
    try {
      const proveedores = await Proveedor.findAll();
      res.json(proveedores);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export const crearProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


