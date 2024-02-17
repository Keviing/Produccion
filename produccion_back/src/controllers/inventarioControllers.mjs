import Inventario from "../models/inventario.mjs";

export const obtenerInventarios = async (req, res) => {
  try {
    const inventarios = await Inventario.findAll();
    res.json(inventarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const crearInventario = async (req, res) => {
  try {
    const inventario = await Inventario.create(req.body);
    res.status(201).json(inventario);
  } catch (error) {
    res.status(500).send(error.message);
  }
};